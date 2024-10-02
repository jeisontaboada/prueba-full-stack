import { Component, inject, OnInit, signal } from '@angular/core';
import { PrductosService } from '../../services/productos.service';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import Productos from '../../interfaces/producto';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [FormsModule, MatTableModule, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './cremas.component.html',
})
export class ProductosComponent implements OnInit {
  productoService = inject(PrductosService);
  listProductos = signal<Productos[]>([]);

  displayedColumns: string[] = ['position', 'nombre','precio', 'acciones'];

  ngOnInit(): void {
    this.getAllProductos();
  }

  getAllProductos() {
    this.productoService.getAll().subscribe({
      next: (data: any) => {
        this.listProductos.set(data);
      },
      error: (err) => {
        alert('Error al obtener los productos');
      },
    });
  }

  nuevoProducto: Omit<Productos, 'id'> = { nombre: '' ,precio: 0 };
  crearProducto(nuevoProducto: Productos) {

    this.productoService.post(nuevoProducto).subscribe({
      next: (response: any) => {
        console.log('Producto creada con éxito', response);

        this.getAllProductos();
      },
      error: (err: any) => {
        console.log('Error al obtener los productos', err);
      },
    });
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  
  deleteProducto(id: number) {
    this.productoService.delete(id).subscribe({
      next: (response: any) => {
        console.log('Se elimino el producto', response);
        this.getAllProductos();
      },
      error: (err: any) => {
        console.log('Error al obtener los productos', err);
      },
    });
  }
}
