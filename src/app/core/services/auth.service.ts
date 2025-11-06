/**
 * @Author: Carlos Galeano
 * @Date:   2025-11-04 11:18:44
 * @Last Modified by:   Carlos Galeano
 * @Last Modified time: 2025-11-06 17:40:29
 */
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {

  // Simulación de la respuesta de la API
  private MOCK_USER = { id: 1, email: 'user@ejemplo.com', name: 'Usuario Demo' };
  private MOCK_TOKEN = 'mock-jwt-token-12345';

  login(credentials: any) {
    // Simula una llamada HTTP exitosa después de 1 segundo
    if (credentials.email === 'test@test.com' && credentials.password === '1234567') {
      return of({
        user: this.MOCK_USER,
        token: this.MOCK_TOKEN
      }).pipe(delay(1000));
    }

    // Simula un error de credenciales
    return throwError(() => new Error('Credenciales inválidas')).pipe(delay(500));
  }
}
