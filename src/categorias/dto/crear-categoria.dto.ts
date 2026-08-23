import { IsNotEmpty, IsString } from 'class-validator';

export class CrearCategoriaDto {
  @IsString()
  @IsNotEmpty()
  nombre!: string;
}