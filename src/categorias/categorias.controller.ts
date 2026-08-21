import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriasService } from './categorias.service';

type CrearCategoriaBody = {
  nombre: string;
};

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Post()
  crear(@Body() body: CrearCategoriaBody) {
    return this.categoriasService.crear(body);
  }

  @Get()
  obtenerTodas() {
    return this.categoriasService.obtenerTodas();
  }
}