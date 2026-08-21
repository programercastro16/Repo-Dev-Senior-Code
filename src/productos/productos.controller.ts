import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ProductosService } from './productos.service';

type CrearProductoBody = {
  nombre: string;
  descripcion?: string;
  precio: number;
  stock: number;
  categoriaId: number;
};

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  crear(@Body() body: CrearProductoBody) {
    return this.productosService.crear(body);
  }

  @Get()
  obtenerTodos() {
    return this.productosService.obtenerTodos();
  }

  @Get(':id')
  obtenerPorId(@Param('id', ParseIntPipe) id: number) {
    return this.productosService.obtenerPorId(id);
  }
}