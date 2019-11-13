import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './route/home/home.component';
import { LegalComponent } from './route/legal/legal.component';
import { CreateRefModule } from './create-ref/create-ref.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LegalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    CreateRefModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
