import { Routes } from '@angular/router';
import { LoginComponent } from './Login/login.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'projetos', component: ProjetosComponent },
    { path: 'users', component: UsersComponent }
];