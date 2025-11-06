/**
 * @Author: Carlos Galeano
 * @Date:   2025-10-30 17:43:26
 * @Last Modified by:   Carlos Galeano
 * @Last Modified time: 2025-11-06 16:55:49
 */
import { bootstrapApplication } from '@angular/platform-browser';

// Importación del componente principal de la aplicación
import { App } from './app/app';

// Importaciones de Angular
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router'; // Si estás usando routing
import { appConfig } from './app/app.config';
// Importaciones de NgRx (Eliminadas para la limpieza, pero se mantienen como comentario)
// import { provideStore } from '@ngrx/store';
// import { provideEffects } from '@ngrx/effects';
// import { provideStoreDevtools } from '@ngrx/store-devtools';
// import { authReducer } from './app/features/auth/store/auth.reducer';
// import { AuthEffects } from './app/features/auth/store/auth.effects';

// Configuración general de Zone.js
import 'zone.js';

bootstrapApplication(App, appConfig).then(() => {
  providers: [
    // Proveedores básicos de Angular que tu app necesita

    // Habilita el módulo HttpClient para tus servicios
    provideHttpClient(),

    // Si usas routing, debes descomentar y configurar esto:
    // provideRouter(routes),

    // Aquí puedes añadir otros servicios, guards, o interceptors globales
  ]
}).catch(err => console.error(err));


