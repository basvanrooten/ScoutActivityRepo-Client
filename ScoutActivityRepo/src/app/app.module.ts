import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppBootstrapModule } from './modules/app-bootstrap/app-bootstrap.module';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/auth/login/login.component';
import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';

import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ComponentsComponent } from './components/components/components.component';
import { ComponentsNewComponent } from './components/components-new/components-new.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ComponentsEditComponent } from './components/components-edit/components-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomePageComponent,
    RegisterComponent,
    ComponentsComponent,
    ComponentsNewComponent,
    ComponentsEditComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AppBootstrapModule,
    HttpClientModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [ HttpClientModule, AuthenticationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

registerLocaleData(localeNl, 'nl')
