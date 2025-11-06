/**
 * @Author: Carlos Galeano
 * @Date:   2025-11-04 11:13:26
 * @Last Modified by:   Carlos Galeano
 * @Last Modified time: 2025-11-06 16:32:45
 */
// src/app/store/auth/auth.effects.ts

import { Injectable, PLATFORM_ID, Inject, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; // Importación para SSR
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap, filter } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthActions } from './auth.actions';
import { AuthService } from '../../../core/guards/auth.guard'; // <--- Importa tu servicio de autenticación
import { Router } from '@angular/router'; // Para la redirección

@Injectable()
export class AuthEffects {

  // 1. Usar inject() para obtener las dependencias (soluciona error 'pipe')
  private actions$ = inject(Actions);
  private authService = inject(AuthService);
  private router = inject(Router);

  constructor(
    // Mantener PLATFORM_ID aquí o usar inject()
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  // EFFECT 1: LOGIN (Llama a la API)
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap((action) =>
        this.authService.login(action.email, action.password).pipe(
          map((response) => {
            const { token, user } = response;
            return AuthActions.loginSuccess({ token, user });
          }),
          catchError((error) => of(AuthActions.loginFailure({
            error: error.error || { message: 'Fallo de autenticación.' }
          })))
        )
      )
    )
  );

  // EFFECT 2: LOGIN SUCCESS (Persistencia y Redirección)
  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      tap((action) => {
        // Guardar token en localStorage
        localStorage.setItem('auth_token', action.token);
        this.router.navigate(['/dashboard']);
      })
    ),
    { dispatch: false }
  );

  // EFFECT 3: LOGOUT (Limpieza y Redirección)
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      tap(() => {
        localStorage.removeItem('auth_token');
        this.router.navigate(['/login']);
      })
    ),
    { dispatch: false }
  );

  // EFFECT 4: INITIALIZATION (Carga la sesión desde el navegador)
  initAuth$ = createEffect(() =>
    this.actions$.pipe(
        ofType(AuthActions.initAuth),
        // Filtrar para ejecutar solo en el navegador (no en SSR)
        filter(() => isPlatformBrowser(this.platformId)),
        map(() => {
            const token = localStorage.getItem('auth_token');
            // Aquí podrías añadir lógica para cargar datos del usuario si lo deseas
            return AuthActions.authLoadSuccess({
                token: token || '',
                user: null
            });
        })
    )
  );
}
