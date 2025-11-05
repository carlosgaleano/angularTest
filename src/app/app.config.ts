/**
 * @Author: Carlos Galeano
 * @Date:   2025-10-30 17:43:26
 * @Last Modified by:   Carlos Galeano
 * @Last Modified time: 2025-11-05 15:37:29
 */
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AuthEffects } from './features/auth/store/auth.effets';


import { authReducer } from './features/auth/store/auth.reducer';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideStore( { auth: authReducer }),

    provideEffects()
]
};
