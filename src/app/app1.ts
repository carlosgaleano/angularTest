/**
 * @Author: Carlos Galeano
 * @Date:   2025-11-06 10:18:07
 * @Last Modified by:   Carlos Galeano
 * @Last Modified time: 2025-11-06 10:18:43
 */
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h3>Hello {{ name }}</h3>
    <button (click)="name = 'Angular'">Reset</button>
  `
})
export class App2 {
  name = 'World';
}
