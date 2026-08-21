import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

type CrearProductoInput = {
  nombre: string;
  descripcion?: string;
  precio: number;
  stock: number;
  categoriaId: number;
};

@Injectable()
export class ProductosService {
  constructor(private readonly prisma: PrismaService) {}

  crear(datos: CrearProductoInput) {
    return this.prisma.producto.create({
      data: datos,
      include: { categoria: true },
    });
  }

  obtenerTodos() {
    return this.prisma.producto.findMany({
      include: { categoria: true },
      orderBy: { id: 'asc' },
    });
  }

  obtenerPorId(id: number) {
    return this.prisma.producto.findUnique({
      where: { id },
      include: { categoria: true },
    });
  }
}