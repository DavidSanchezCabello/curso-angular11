import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {


  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  constructor(){}
  // agregarNuevoPersonaje( argumento: Personaje ){
  //   this.personajes.push( argumento );
  // }

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }
// Inyección de dependencia "dbzService"
  // constructor( private dbzService: DbzService){}

}
