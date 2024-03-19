import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-advisor',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './advisor.component.html',
  styleUrl: './advisor.component.css'
})
export class AdvisorComponent {

}
