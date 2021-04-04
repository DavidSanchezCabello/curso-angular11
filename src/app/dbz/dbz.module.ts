// Importaciones de Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Importaciones de terceros
// Importaciones que crea el programador
import { MainPageComponent } from './main-page/main-page.component';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }