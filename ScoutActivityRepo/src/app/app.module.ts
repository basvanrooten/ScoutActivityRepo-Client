import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppBootstrapModule } from './modules/app-bootstrap/app-bootstrap.module';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/auth/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ComponentsComponent } from './components/components/components.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomePageComponent,
    RegisterComponent,
    ComponentsComponent
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
