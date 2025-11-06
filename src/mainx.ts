/**
 * @Author: Carlos Galeano
 * @Date:   2025-10-30 17:43:26
 * @Last Modified by:   Carlos Galeano
 * @Last Modified time: 2025-11-06 10:13:00
 */
import { bootstrapApplication } from "@angular/platform-browser";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<h1>Welcome to the App!</h1>
  <h3> hello {{name}}</h3>
  <button (click)="name='Carlos'">Click me</button>
  `,
})
export class App {
name = 'World';
}

export default  bootstrapApplication(App).catch((err) => console.error(err));


