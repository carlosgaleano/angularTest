/**
 * @Author: Carlos Galeano
 * @Date:   2025-11-04 11:13:26
 * @Last Modified by:   Carlos Galeano
 * @Last Modified time: 2025-11-05 17:29:47
 */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../../../core/services/auth.service';
import * as AuthActions from './auth.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      // switchMap cancela peticiones anteriores si hay una nueva
      switchMap(action =>
        this.authService.login(action).pipe(
          // Side Effect: Persistencia del token en localStorage
          tap(response => {
            localStorage.setItem('auth_token', response.token);
            this.router.navigate(['/dashboard']); // Redirigir al éxito
          }),
          // Si es exitoso, despacha la acción de éxito
          map(response => AuthActions.loginSuccess(response)),
          // Si falla, despacha la acción de fallo
          catchError(error => of(AuthActions.loginFailure({ error: error.message })))
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      // Side Effect: Limpieza de persistencia y navegación
      tap(() => {
        localStorage.removeItem('auth_token');
        // Limpiar otros datos relacionados con el usuario si es necesario
        this.router.navigate(['/login']);
      }),
      // Despacha la acción de éxito del logout (para que el reducer limpie el estado)
      map(() => AuthActions.logoutSuccess())
    )
  );
}
