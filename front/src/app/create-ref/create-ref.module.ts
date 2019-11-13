import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRefRoutingModule } from './create-ref-routing.module';
import { FormComponent } from './form/form.component';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [FormComponent, SuccessComponent],
  imports: [
    CommonModule,
    CreateRefRoutingModule
  ]
})
export class CreateRefModule { }
