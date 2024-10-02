import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClientesService } from '../../services/clientes.service';
import Clientes from '../../interfaces/cliente';

@Component({
  selector: 'app-comanda',
  standalone: true,
  imports: [FormsModule, MatTableModule, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './comanda.component.html',
})
export class ClienteComponent implements OnInit  {
  productoService = inject(ClientesService);
  listClientes = signal<Clientes[]>([]);

  displayedColumns: string[] = ['position', 'nombre','precio', 'acciones'];

  ngOnInit(): void {
    this.getAllClientes();
  }

  getAllClientes() {
    this.productoService.getAll().subscribe({
      next: (data: any) => {
        this.listClientes.set(data);
      },
      error: (err) => {
        alert('Error al obtener los clientes');
      },
    });
  }

  nuevoCliente: Omit<Clientes, 'id'> = { nombre: '' ,email: '' };
  crearCliente(nuevoCliente: Clientes) {

    this.productoService.post(nuevoCliente).subscribe({
      next: (response: any) => {
        console.log('Cliente creada con éxito', response);
        this.getAllClientes();
      },
      error: (err: any) => {
        console.log('Error al obtener los clientes', err);
      },
    });
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }
 
  
  deleteCliente(id: number) {
    this.productoService.delete(id).subscribe({
      next: (response: any) => {
        console.log('Se elimino el cliente', response);
        this.getAllClientes();
      },
      error: (err: any) => {
        console.log('Error al obtener los clientes', err);
      },
    });
  }
}
