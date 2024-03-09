import { Component } from "@angular/core";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-container',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './Login/login.html',
    styleUrl: './login.component.css'
})

export class LoginComponent{
    title = 'login';
}