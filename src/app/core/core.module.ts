import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WrapperComponent } from './wrapper/wrapper.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    WrapperComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    WrapperComponent
  ]
})
export class CoreModule { }
