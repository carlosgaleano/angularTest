/**
 * @Author: Carlos Galeano
 * @Date:   2025-11-04 11:12:59
 * @Last Modified by:   Carlos Galeano
 * @Last Modified time: 2025-11-05 15:42:22
 */
import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

// Definición del estado (se recomienda en un archivo auth.state.ts, pero lo incluimos aquí para simplificar)
export interface AuthState {
  user: any | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: any | null;
}

// Inicialización del estado
export const initialAuthState: AuthState = {
  // 🚩 FIX: Initialize with null/false to be SSR-safe.
  token: null,
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

// Reducer que define cómo cambia el estado en respuesta a las acciones
export const authReducer = createReducer(
  initialAuthState,

  // Login Attempt
  on(AuthActions.login, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  // Login Success
  on(AuthActions.loginSuccess, (state, { user, token }) => ({
    ...state,
    user,
    token,
    isAuthenticated: true,
    loading: false,
    error: null,
  })),

  // Login Failure
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error,
  })),

  // Logout Success (resetea el estado a su valor inicial)
  on(AuthActions.logoutSuccess, () => initialAuthState)
);
