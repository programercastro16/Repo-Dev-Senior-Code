import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductosService {
  private productos = [
    { id: 1, nombre: 'Teclado mecánico', precio: 120000, stock: 15 },
    { id: 2, nombre: 'Mouse inalámbrico', precio: 45000, stock: 30 },
     { id: 3, nombre: 'Pantalla', precio: 1000000, stock: 5 },
  ];

  obtenerTodos() {
    return this.productos;
  }

  crear(nuevo: { nombre: string; precio: number; stock: number }) {
    const producto = {
      id: this.productos.length + 1,
      nombre: nuevo.nombre,
      precio: nuevo.precio,
      stock: nuevo.stock,
    };
    this.productos.push(producto);
    return producto;
  }
}