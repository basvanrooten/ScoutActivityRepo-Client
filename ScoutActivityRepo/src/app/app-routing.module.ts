import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ComponentsComponent } from './components/components/components.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomePageComponent, canActivate: [AuthGuardService]},
  {path: 'components', component: ComponentsComponent, canActivate: [AuthGuardService]},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
