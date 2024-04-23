import { Component } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls:['./auth.component.css']
})
export class AuthComponent {
  textoUsuario: string = '';
  senhaUsuario: string = ''
  attempt: boolean = false;
  loading: boolean = false;
  repos: string[] = [];
  credentials = {
    email: '',
    password: ''
   };
   errorMessage: string = '';
  constructor(private router: Router, private userDataService: UsersDataService) {}

  verificarUser() {
    this.loading = true;
    this.userDataService.tryLogin().subscribe(
      (response: any) =>{
        console.log('response received');
        this.repos = response;
      },
      (error) => {                              //error() callback
        console.error('Request failed with error')
        this.errorMessage = error;
        this.loading = false;
        this.attempt = true;
      },
      () => {                                   //complete() callback
        console.error('Request completed')      //This is actually not needed 
        this.loading = false; 
      });
    
    /*const user = 'Giovani';
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
    */
  }

}
