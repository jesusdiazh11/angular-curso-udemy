import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  // styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent {
  nombre: string = 'Ironman';
  edad: number = 45;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    // las backtips sirven para insertar templates de un string
    //return this.nombre + ' - ' + this.edad;
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void {
    this.edad = 20;
  }
}
