import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { Prisma } from '../generated/prisma/client';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let mensaje = 'Error interno del servidor';

    if (exception.code === 'P2025') {
      status = HttpStatus.NOT_FOUND;
      mensaje = 'El registro solicitado no existe';
    }

    if (exception.code === 'P2002') {
      status = HttpStatus.CONFLICT;
      mensaje = 'Ya existe un registro con ese valor único';
    }

    if (exception.code === 'P2003') {
      status = HttpStatus.BAD_REQUEST;
      mensaje = 'La referencia indicada no existe';
    }

    response.status(status).json({ statusCode: status, message: mensaje });
  }
}