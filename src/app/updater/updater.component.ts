import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive, RouterOutlet,Router } from '@angular/router';

@Component({
  selector: 'app-updater',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule,
    RouterLink,
    RouterOutlet,
    RouterLinkActive],
  templateUrl: './updater.component.html',
  styleUrl: './updater.component.css'
})
export class UpdaterComponent {
  constructor(private router: Router) {}
  voltar(){
    this.router.navigate(['/adm']);
  }
}
