import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

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
    MatInputModule,
    CommonModule],

  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  textoUsuario: string = '';
  attempt: boolean = false;

  constructor(private router: Router) {}

  verificarUser() {
    const user = 'Giovani';
    const adv = 'Lucas';
    const adm = 'Felipe';
    
    if (this.textoUsuario === user) {
      this.router.navigate(['/student']);
    } else if(this.textoUsuario == adv) {
      this.router.navigate(['/advisor']);
    }
    else if(this.textoUsuario == adm){
      this.router.navigate(['/adm']);
    }else{
      this.attempt = true;
    }
  }
}