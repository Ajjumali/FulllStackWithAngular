import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/Home/home/home.component';
import { LoginComponent } from './Pages/Login/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];