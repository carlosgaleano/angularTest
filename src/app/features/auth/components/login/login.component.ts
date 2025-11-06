/**
 * @Author: Carlos Galeano
 * @Date:   2025-11-04 11:11:23
 * @Last Modified by:   Carlos Galeano
 * @Last Modified time: 2025-11-06 16:59:24
 */
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
// [ELIMINADAS: Store, Observable, Selectors, Actions]
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AuthActions } from '../../store/auth.actions';
import { AuthSelectors } from '../../store/auth.selectors';
import {  AuthState } from '../../store/auth.reducer';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators'; //

interface AppState {
    auth: AuthState;
}
@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  // Observables para leer el estado del store (Eliminados)
  loading$!: Observable<boolean>;
   error$!: Observable<any>;
  isAuthenticated$!: Observable<boolean>;



 constructor(
    private fb: FormBuilder,
    private store: Store<AppState>, // Inyección del Store
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });

    // Eliminada la lectura del estado (selectores)
    // this.loading$ = this.store.select(AuthSelectors.selectAuthLoading);
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
    // La lógica de dispatch (disparo de acción) ha sido eliminada.
    console.log('1. CLIC/ENTER detectado.');
    console.log('2. Estado de validez:', this.loginForm.valid);

    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log('3. Formulario válido. Simulación de envío. Email:', email);

      // Aquí iría el dispatch:
       this.store.dispatch(AuthActions.login({ email, password }));
    }
  }
}
