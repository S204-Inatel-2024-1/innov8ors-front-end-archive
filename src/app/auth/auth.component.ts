import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ 
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive, 
    MatButtonModule, 
    MatFormFieldModule,
    FormsModule,
    MatInputModule],

  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  textoUsuario: string = '';

  constructor(private router: Router) {}

  verificarUser() {
    const user = 'Giovani';
    const admin = 'Lucas';
    
    if (this.textoUsuario === user) {
      this.router.navigate(['/student']);
    } else if(this.textoUsuario == admin) {
      this.router.navigate(['/advisor']);
    }
  }
}