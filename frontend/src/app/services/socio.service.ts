import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Socio } from '../models/socio.model';

@Injectable({
  providedIn: 'root'
})
export class SocioService {
  obtenerSocios() : Observable<Socio[]> {
    throw new Error('Method not implemented.');
    
  }


  private apiUrl: string = 'http://localhost:8080/v1/socios';

  constructor(private http: HttpClient) { }

  // Obtener todos los socios
  getSocios(): Observable<Socio[]> {
    return this.http.get<Socio[]>(this.apiUrl);
  }

  // Obtener un socio por su ID
  getSocio(id: number): Observable<Socio> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Socio>(url);
  }

  // Crear un nuevo socio
  crearSocio(socio: Socio): Observable<Socio> {
    return this.http.post<Socio>(this.apiUrl, socio);
  }

  // Actualizar un socio existente
  actualizarSocio(id: number, socio: Socio): Observable<Socio> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Socio>(url, socio);
  }

  // Eliminar un socio por su ID
  eliminarSocio(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}

