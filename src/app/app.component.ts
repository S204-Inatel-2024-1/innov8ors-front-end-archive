import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatAccordion, MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, MatAccordion, MatExpansionPanel],
  templateUrl: './index.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

}
