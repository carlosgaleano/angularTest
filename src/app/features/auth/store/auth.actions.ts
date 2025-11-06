/**
 * @Author: Carlos Galeano
 * @Date:   2025-11-04 11:12:44
 * @Last Modified by:   Carlos Galeano
 * @Last Modified time: 2025-11-06 17:10:16
 */
// src/app/store/auth/auth.actions.ts

import { createAction, props } from '@ngrx/store';

// 1. Acción de Solicitud (Disparada desde el componente Login)
export const login = createAction(

  '[Auth] Login Request',
  props<{ email: string; password: string }>()
);

// 2. Acción de Éxito (Disparada desde el Effect)
export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ token: string; user: any }>() // Contiene el token y los datos del usuario
);

// 3. Acción de Fallo (Disparada desde el Effect)
export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

// 4. Acción de Logout (Disparada desde el componente o un guardia)
export const logout = createAction(
  '[Auth] Logout'
);

// Objeto para exportar todas las acciones fácilmente
//export const AuthActions = { login, loginSuccess, loginFailure, logout };

// Nuevas acciones para inicialización/SSR
export const initAuth = createAction(
  '[Auth] Initialize Authentication'
);

export const authLoadSuccess = createAction(
  '[Auth] Authentication Load Success',
  props<{ token: string; user: any | null }>()
);

// Asegúrate de que todas las acciones estén en la exportación:
export const AuthActions = {
    login,
    loginSuccess,
    loginFailure,
    logout,
    // <<<< ¡CORRECCIÓN CLAVE AQUÍ! >>>>
    initAuth,
    authLoadSuccess
};
