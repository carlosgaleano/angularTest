/**
 * @Author: Carlos Galeano
 * @Date:   2025-11-04 11:11:23
 * @Last Modified by:   Carlos Galeano
 * @Last Modified time: 2025-11-05 16:32:02
 */
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

// Importamos las acciones y selectores que definimos
import * as AuthActions from '../../store/auth.actions';
import * as AuthSelectors from '../../store/auth.selectors';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    FormsModule,
    ReactiveFormsModule, // Necesario para FormGroup/FormBuilder
    CommonModule, // <-- ¡ESTO RESUELVE *ngIf y async pipe!
  ],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  // Observables para leer el estado del store
  loading$!: Observable<boolean>;
  error$!: Observable<any>;
  isAuthenticated$!: Observable<boolean>; // Podría usarse para redirigir

  constructor(
    private fb: FormBuilder,
    private store: Store // Inyectamos el Store de NgRx
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });

    // 1. LECTURA DEL ESTADO: Usamos los selectores para obtener partes del estado.
    this.loading$ = this.store.select(AuthSelectors.selectAuthLoading);
    // Asumimos que también tenemos un selector para el error
    // this.error$ = this.store.select(AuthSelectors.selectAuthError);
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



  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log('Formulario válido. Email:', email, 'Password:', password);

      // 2. DISPARO DE ACCIÓN: Disparamos la acción 'login' con las credenciales
      // Esto inicia la cadena de NgRx (Action -> Effect -> Reducer -> State)
      this.store.dispatch(AuthActions.login({ email, password }));
    }
  }
}
