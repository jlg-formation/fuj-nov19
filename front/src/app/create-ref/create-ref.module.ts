import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CreateRefRoutingModule } from './create-ref-routing.module';
import { FormComponent } from './form/form.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [FormComponent, SuccessComponent],
  imports: [CommonModule, CreateRefRoutingModule, FontAwesomeModule, ReactiveFormsModule]
})
export class CreateRefModule {}
