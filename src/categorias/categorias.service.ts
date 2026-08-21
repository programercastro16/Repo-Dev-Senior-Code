import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

type CrearCategoriaInput = {
  nombre: string;
};

@Injectable()
export class CategoriasService {
  constructor(private readonly prisma: PrismaService) {}

  crear(datos: CrearCategoriaInput) {
    return this.prisma.categoria.create({
      data: { nombre: datos.nombre },
    });
  }

  obtenerTodas() {
    return this.prisma.categoria.findMany({
      include: { productos: true },
      orderBy: { id: 'asc' },
    });
  }
}