import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  urlBase: string = "https://github-actions-service-smc757oxwq-uc.a.run.app/api/v1/auth/login";

  constructor(private http: HttpClient) {}

  tryLogin(): Observable<any> {
    return this.http.post<any>(this.urlBase, {
      "name": "test1",
      "email": "test1@gmail.com",
      "password": "test1",
      "role": "ADMIN"
    })
  }
}
