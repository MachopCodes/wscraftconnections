import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WelcomeComponent } from './core/welcome/welcome.component';
import { BrandsComponent } from './core/brands/brands.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, WelcomeComponent, BrandsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
