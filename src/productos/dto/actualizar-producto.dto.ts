import { PartialType } from '@nestjs/mapped-types';
import { CrearProductoDto } from './crear-producto.dto';

export class ActualizarProductoDto extends PartialType(CrearProductoDto) {}