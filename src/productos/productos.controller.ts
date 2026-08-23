/* import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
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
} */

/* import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CrearProductoDto } from './dto/crear-producto.dto';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) { }

  @Post()
  crear(@Body() body: CrearProductoDto) {
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
} */

  import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CrearProductoDto } from './dto/crear-producto.dto';
import { ActualizarProductoDto } from './dto/actualizar-producto.dto';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  crear(@Body() body: CrearProductoDto) {
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

  @Patch(':id')
  actualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: ActualizarProductoDto,
  ) {
    return this.productosService.actualizar(id, body);
  }

  @Delete(':id')
  eliminar(@Param('id', ParseIntPipe) id: number) {
    return this.productosService.eliminar(id);
  }
}