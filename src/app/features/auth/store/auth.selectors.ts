// src/app/store/auth/auth.selectors.ts

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, authFeatureKey } from './auth.reducer';

// 1. Selector de la característica (Necesario para acceder a todo el estado 'auth')
export const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey);

// 2. Selector para el estado de carga
export const selectAuthLoading = createSelector(
  selectAuthState,
  (state) => state.loading
);

// 3. Selector para el estado de autenticación
export const selectAuthIsAuthenticated = createSelector(
  selectAuthState,
  (state) => state.isAuthenticated
);

// 4. Selector para los datos del usuario
export const selectAuthUser = createSelector(
  selectAuthState,
  (state) => state.user
);

// 5. Selector para errores
export const selectAuthError = createSelector(
  selectAuthState,
  (state) => state.error
);

// Objeto para exportar todos los selectores fácilmente
export const AuthSelectors = {
  selectAuthLoading,
  selectAuthIsAuthenticated,
  selectAuthUser,
  selectAuthError
};
