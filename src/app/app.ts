/**
 * @Author: Carlos Galeano
 * @Date:   2025-10-30 17:43:26
 * @Last Modified by:   Carlos Galeano
 * @Last Modified time: 2025-11-03 14:42:06
 */
// app/app.ts

import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login.component'; // Importa desde su nueva ubicación

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
