/**
 * @Author: Carlos Galeano
 * @Date:   2025-10-30 17:43:26
 * @Last Modified by:   Carlos Galeano
 * @Last Modified time: 2025-11-06 11:48:29
 */
// app/app.ts

import { Component } from '@angular/core';
//import { LoginComponent } from './components/login/login.component'; // Importa desde su nueva ubicación
import {LoginComponent} from './features/auth/components/login/login.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // El selector raíz
  standalone: true,
  imports: [
    // El componente de Login es una dependencia de la aplicación raíz
    LoginComponent
  ],
  template: `
    <app-login></app-login>
    `,
})
export class App {
  // Ya no necesita las propiedades email/password ni la función onLogin
}
