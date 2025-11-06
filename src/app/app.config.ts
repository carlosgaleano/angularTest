/**
 * @Author: Carlos Galeano
 * @Date:   2025-10-30 17:43:26
 * @Last Modified by:   Carlos Galeano
 * @Last Modified time: 2025-11-06 16:57:01
 */
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AuthEffects } from './features/auth/store/auth.effects';
import { provideHttpClient } from '@angular/common/http';


import { authReducer, authFeatureKey } from './features/auth/store/auth.reducer';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

/* export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideStore( { auth: authReducer }),

    provideEffects()
]
};
 */

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(), // Necesario para que AuthService funcione

    // 🌟 1. REGISTRO DEL STORE GLOBAL 🌟
    // Se usa un objeto donde la clave es el 'authFeatureKey' (ej: 'auth')
    // y el valor es el 'authReducer'.
    provideStore({
        [authFeatureKey]: authReducer
    }),

    // 🌟 2. REGISTRO DE LOS EFFECTS 🌟
    // Se pasa un array de todas las clases Effect que necesita la app.
    provideEffects(AuthEffects),

    // 3. Opcional: Herramientas de desarrollo del Store
    provideStoreDevtools({
        maxAge: 25,
        logOnly: !isDevMode(),
        autoPause: true,
        trace: false,
        traceLimit: 75, // Ajusta el límite de trazas de acciones si es necesario
    }),
  ]
};
