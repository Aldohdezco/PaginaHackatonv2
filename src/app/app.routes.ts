import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AwardsComponent } from './components/awards/awards.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'premios', component: AwardsComponent },
  { path: '**', redirectTo: '' }
];
