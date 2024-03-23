import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-advisor',
  standalone: true,
  imports: [MatExpansionModule, MatFormFieldModule],
  templateUrl: './advisor.component.html',
  styleUrl: './advisor.component.css'
})
export class AdvisorComponent {
  panelOpenState: boolean = false;
}
