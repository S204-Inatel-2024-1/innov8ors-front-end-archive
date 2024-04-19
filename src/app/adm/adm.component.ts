import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButton } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';


@Component({
  selector: 'app-adm',
  standalone: true,
  imports: [
    MatButtonModule, 
    MatButton, 
    MatExpansionModule, 
    MatFormFieldModule,
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive],
  templateUrl: './adm.component.html',
  styleUrl: './adm.component.css'
})
export class AdmComponent {
  panelOpenState: boolean = false;
  constructor(private router: Router) {}
  updateData(){
    this.router.navigate(['/updater']);
  }
}
