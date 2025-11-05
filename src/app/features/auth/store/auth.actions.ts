import { createAction, props } from '@ngrx/store';

// 1. Acciones para el flujo de LOGIN
export const login = createAction(
  '[Auth] Login Attempt',
  props<{ email: string, password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: any, token: string }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

// 2. Acciones para el flujo de LOGOUT
export const logout = createAction('[Auth] Logout');

export const logoutSuccess = createAction('[Auth] Logout Success');
