import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  urlBase: string = "https://github-actions-service-smc757oxwq-uc.a.run.app/api/v1/auth/login";

  constructor(private http: HttpClient) {}

  tryLogin(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.urlBase, {
      "email": email,
      "password": password
    })
  }
}
