import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ComponentsComponent } from './components/components/components.component';
import { ComponentsNewComponent } from './components/components-new/components-new.component';
import { ComponentsEditComponent } from './components/components-edit/components-edit.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { ActivitiesNewComponent } from './components/activities-new/activities-new.component';
import { ActivitiesEditComponent } from './components/activities-edit/activities-edit.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomePageComponent, canActivate: [AuthGuardService]},
  {path: 'activities', component: ActivitiesComponent, canActivate: [AuthGuardService]},
  {path: 'activities/new', component: ActivitiesNewComponent, canActivate: [AuthGuardService]},
  {path: 'activities/edit/:activityId', component: ActivitiesEditComponent, canActivate: [AuthGuardService]},
  {path: 'components', component: ComponentsComponent, canActivate: [AuthGuardService]},
  {path: 'components/new', component: ComponentsNewComponent, canActivate: [AuthGuardService]},
  {path: 'components/edit/:componentId', component: ComponentsEditComponent, canActivate: [AuthGuardService]},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
