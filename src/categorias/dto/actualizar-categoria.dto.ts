import { PartialType } from '@nestjs/mapped-types';
import { CrearCategoriaDto } from './crear-categoria.dto';

export class ActualizarCategoriaDto extends PartialType(CrearCategoriaDto) {}