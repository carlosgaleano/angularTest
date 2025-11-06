/**
 * @Author: Carlos Galeano
 * @Date:   2025-11-04 10:29:39
 * @Last Modified by:   Carlos Galeano
 * @Last Modified time: 2025-11-06 15:12:53
 */
// src/app/services/auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaz opcional para el objeto que devuelve el backend al hacer login
interface LoginResponse {
  token: string;
  user: {
    id: number;
    email: string;
    name: string;
    // ... otros campos del usuario
  };
}

@Injectable({
  providedIn: 'root' // Hace que el servicio esté disponible en toda la aplicación
})
export class AuthService {
  // URL base de tu API (ajusta esto a tu entorno)
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  /**
   * Realiza la llamada HTTP al endpoint de login.
   * @param email Email del usuario.
   * @param password Contraseña del usuario.
   * @returns Un Observable con la respuesta del servidor (token y datos del usuario).
   */
  login(email: string, password: string): Observable<LoginResponse> {
    const credentials = { email, password };

    // POST a /api/login con las credenciales
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials);
  }

  /**
   * Método opcional para registrar un nuevo usuario
   * // register(userData: any): Observable<any> { ... }
   */

  /**
   * Método opcional para obtener datos del usuario
   * // getUserData(): Observable<any> { ... }
   */
}
