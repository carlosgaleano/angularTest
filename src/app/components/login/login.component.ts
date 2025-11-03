/**
 * @Author: Carlos Galeano
 * @Date:   2025-10-30 18:02:36
 * @Last Modified by:   Carlos Galeano
 * @Last Modified time: 2025-11-03 15:41:43
 */
/**
 * @Author: Carlos Galeano
 * @Date:   2025-10-30 18:02:36
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para directivas comunes si el componente es standalone
import { FormsModule } from '@angular/forms'; // Necesario para ngModel, etc.

@Component({
  selector: 'app-login',
  standalone: true, // Si usas standalone components
  imports: [CommonModule, FormsModule], // Importaciones
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Apunta a tu archivo CSS
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  onSubmit() {
    console.log('Login intentado con:', this.email, this.password);
    // Lógica de inicio de sesión aquí
  }

  startTrial() {
    console.log('Iniciar prueba de 14 días');
    // Lógica para iniciar la prueba
  }

  forgotPassword() {
    console.log('Olvidé mi contraseña');
    // Lógica para recuperar contraseña
  }

  loginWithGoogle() {
    console.log('Iniciar con Google');
    // Lógica para Google
  }

  loginWithGitHub() {
    console.log('Iniciar con GitHub');
    // Lógica para GitHub
  }
}
