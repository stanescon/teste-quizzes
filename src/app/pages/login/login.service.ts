import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  api = environment.api
  constructor(
    private http: HttpClient
  ) { }

  login(formLogin: any){
    return this.http.post(this.api + 'auth', formLogin)
  }
}
