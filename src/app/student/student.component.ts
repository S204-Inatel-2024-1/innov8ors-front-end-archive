import { Component } from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [MatExpansionModule, MatAccordion],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  panelOpenState: boolean = false;
}
