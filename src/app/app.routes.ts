import { Routes } from '@angular/router';
import { AdvisorComponent } from './advisor/advisor.component';
import { AuthComponent } from './auth/auth.component';
import { StudentComponent } from './student/student.component';

export const routes: Routes = [
    { path: 'auth', component: AuthComponent },
    { path: 'advisor', component: AdvisorComponent },
    { path: 'student', component: StudentComponent },
];