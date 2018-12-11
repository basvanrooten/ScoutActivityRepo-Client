import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppBootstrapModule } from './modules/app-bootstrap/app-bootstrap.module';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ComponentListComponent } from './components/component-list/component-list.component';

import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegisterComponent } from './components/auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ComponentListComponent,
    HomePageComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AppBootstrapModule,
    HttpClientModule
  ],
  providers: [ HttpClientModule, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
