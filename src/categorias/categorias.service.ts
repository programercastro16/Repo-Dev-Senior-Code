import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

type CrearCategoriaInput = {
  nombre: string;
};

type ActualizarCategoriaInput = {
  nombre?: string;
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

  obtenerPorId(id: number) {
    return this.prisma.categoria.findUnique({
      where: { id },
      include: { productos: true },
    });
  }

  actualizar(id: number, datos: ActualizarCategoriaInput) {
    return this.prisma.categoria.update({
      where: { id },
      data: datos,
    });
  }

  eliminar(id: number) {
    return this.prisma.categoria.delete({
      where: { id },
    });
  }
}