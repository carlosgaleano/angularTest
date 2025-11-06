/**
 * @Author: Carlos Galeano
 * @Date:   2025-11-04 11:12:59
 * @Last Modified by:   Carlos Galeano
 * @Last Modified time: 2025-11-06 15:46:08
 */
// src/app/store/auth/auth.reducer.ts

import { createReducer, on } from '@ngrx/store';
import { AuthActions } from './auth.actions';

// Interfaz del estado de la característica Auth
export interface AuthState {
  token: string | null;
  user: any | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: any | null;
}

// Estado inicial: Intenta cargar el token desde el localStorage para persistencia
export const initialAuthState: AuthState = {
  token: null, // Lo inicializamos en null
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

// Reducer que define las transiciones de estado
export const authReducer = createReducer(
  initialAuthState,

  // Cuando se dispara login: iniciar carga
  on(AuthActions.login, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  // Cuando login es exitoso: guardar datos y marcar como autenticado
  on(AuthActions.loginSuccess, (state, { token, user }) => ({
    ...state,
    token,
    user,
    isAuthenticated: true,
    loading: false,
    error: null,
  })),

  // Cuando login falla: limpiar estado y guardar error
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    token: null,
    user: null,
    isAuthenticated: false,
    loading: false,
    error,
  })),

  // Cuando se dispara logout: limpiar todo el estado
  on(AuthActions.logout, () => ({
    ...initialAuthState, // Puedes reiniciar al estado inicial, o un estado limpio
    token: null,
    user: null,
    isAuthenticated: false,
  }))
);

// Exporta el nombre de la característica (usado para registrar el feature en el App Module)
export const authFeatureKey = 'auth';
