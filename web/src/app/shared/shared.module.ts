import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericFieldComponent } from './generic-field/generic-field.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [GenericFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    GenericFieldComponent
  ]
})
export class SharedModule { }
