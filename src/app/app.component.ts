import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatAccordion, MatExpansionPanel } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { AuthComponent } from './auth/auth.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    AuthComponent,
    MatAccordion, 
    MatExpansionPanel, 
    MatInputModule, 
    MatFormFieldModule, 
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule],
  templateUrl: './index.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
}
