import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AwardsComponent } from './components/awards/awards.component';
import { CoursesComponent } from './components/courses/courses.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'premios', component: AwardsComponent },
  { path: 'cursos', component: CoursesComponent },
  { path: '**', redirectTo: '' }
];
