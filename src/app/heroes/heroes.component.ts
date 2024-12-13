//este es el archivo de la logica donde declaramos los objetos y los métodos 
// (linea básica) Importamos las dependencias necesarias desde Angular 
import { Component } from '@angular/core';
import { Heroe } from '../interface/heroe.interface';

// Decorador que declara un componente como una clase de Angular. 
@Component({
  // le dice que el componente heroes puede ser usado en cualquier archivo html
  selector: 'app-heroes', 
  // aunque ya lo hemos creado sin standalone es importante para app.module.ts
  standalone: false, 
  //ruta donde esta el archivo html 
  templateUrl: './heroes.component.html', 
  //ruta de la hoja de estilo 
  styleUrls: ['./heroes.component.css'] 
})
//le decimos que vamos a usar la clase que hemos creado antes del componente Heroes
export class HeroesComponent { 

// Declaramos un array de heroes donde podremos añadir; atención a la interface que estamos usando
  heroes: Heroe[] = [
    { id: 1, nombre: 'BATMAN', poder: 1000 }, // Cada héroe tiene un `id`, `nombre` y `poder`.
    { id: 2, nombre: 'SUPERMAN', poder: 9500 },
    { id: 3, nombre: 'CATWOMAN', poder: 7500 },
  ];

//creamos un objeto y sobre este iremos creando los nuevos heroes 
  nuevoHeroe: Heroe = { id: 0, nombre: '', poder: 0 };

  agregarHeroe() {
    // Validamos que el nombre no esté vacío y que el poder sea mayor a 0.
    if (this.nuevoHeroe.nombre.trim() && this.nuevoHeroe.poder > 0) {
      // Calculamos un nuevo ID basado en el último héroe de la lista.
      const nuevoId = this.heroes.length > 0 
        ? (this.heroes[this.heroes.length - 1]?.id || 0) + 1 
        : 1;
  
      // Agregamos el nuevo héroe a la lista con los valores actuales de `nuevoHeroe`.
      this.heroes.push({ ...this.nuevoHeroe, id: nuevoId });
  
      // Reseteamos el formulario para agregar otro héroe.
      this.nuevoHeroe = { id: 0, nombre: '', poder: 0 };
    }
  }
  

// Método para eliminar un héroe de la lista basado en su `id`.
  eliminarHeroe(id: number) {
    // Filtramos la lista de héroes y devolvemos todos excepto el que tenga el ID especificado.
    this.heroes = this.heroes.filter(heroe => heroe.id !== id);
  }
}
