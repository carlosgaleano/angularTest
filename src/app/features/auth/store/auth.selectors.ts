/**
 * @Author: Carlos Galeano
 * @Date:   2025-11-04 11:14:03
 * @Last Modified by:   Carlos Galeano
 * @Last Modified time: 2025-11-04 11:22:13
 */
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer'; // Importa la interfaz de estado

// 1. Selector del feature (el slice completo 'auth')
export const selectAuthState = createFeatureSelector<AuthState>('auth');

// 2. Selectores derivados
export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state) => state.isAuthenticated
);

export const selectAuthUser = createSelector(
  selectAuthState,
  (state) => state.user
);

export const selectAuthLoading = createSelector(
  selectAuthState,
  (state) => state.loading
);
