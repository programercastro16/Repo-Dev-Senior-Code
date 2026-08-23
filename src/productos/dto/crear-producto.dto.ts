import { IsString, IsNotEmpty, IsNumber, Min, IsInt, IsOptional } from 'class-validator';

export class CrearProductoDto {
  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsNumber()
  @Min(0)
  precio!: number;

  @IsInt()
  @Min(0)
  stock!: number;

  @IsInt()
  categoriaId!: number;
}