/**
 * @Author: Carlos Galeano
 * @Date:   2025-10-30 17:43:26
 * @Last Modified by:   Carlos Galeano
 * @Last Modified time: 2025-11-05 16:39:18
 */
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import 'zone.js';

import { authReducer } from './app/features/auth/store/auth.reducer'; // Asegúrate que la ruta es correcta
import { AuthEffects } from './app/features/auth/store/auth.effets';

// Importaciones de Angular
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router'; // Si estás usando routing

bootstrapApplication(App, {
  providers: [
    // CLAVE: Aquí es donde se define el slice 'auth'
    provideStore({
      // El string 'auth' es el nombre del feature.
      // Debe coincidir con lo que usas en createFeatureSelector.
      auth: authReducer
    }),

    // Configura los efectos para que puedan escuchar las acciones
    provideEffects([AuthEffects]),

    provideHttpClient(),

    // ... otros providers como provideRouter, provideHttpClient, etc.
  ]
}).catch(err => console.error(err));


