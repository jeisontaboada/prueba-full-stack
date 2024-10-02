import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import Productos from '../interfaces/producto';

@Injectable({
  providedIn: 'root',
})
export class PrductosService {
  private readonly url = `${environment.baseUrl}/productos`;
  private readonly http = inject(HttpClient);

  getAll() {
    return this.http.get(this.url);
  }

  post(data: Productos): Observable<Productos> {
    return this.http.post<Productos>(this.url, data);
  }
  update(id: number, data: Productos): Observable<Productos> {
    return this.http.put<Productos>(`${this.url}/${id}`, data);
  }
  
  delete(id: number): Observable<void> {
    // Cambia el tipo de retorno y acepta un id
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
