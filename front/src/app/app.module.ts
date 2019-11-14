import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './route/home/home.component';
import { LegalComponent } from './route/legal/legal.component';
import { CreateRefModule } from './create-ref/create-ref.module';
import { ReferenceService } from './service/reference.service';
import { HttpReferenceService } from './service/http-reference.service';
import { HttpClientModule } from '@angular/common/http';
import { SellRefModule } from './sell-ref/sell-ref.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, LegalComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, CreateRefModule, HttpClientModule, SellRefModule],
  providers: [{ provide: ReferenceService, useClass: HttpReferenceService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
