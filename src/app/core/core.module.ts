import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WrapperComponent } from './wrapper/wrapper.component';



@NgModule({
  declarations: [
    WrapperComponent
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
