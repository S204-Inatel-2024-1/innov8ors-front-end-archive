import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './Login/login.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'innov8ors-front-end';
}
