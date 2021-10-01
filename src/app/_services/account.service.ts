import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:44397/'

  constructor(private http: HttpClient) { }

  login(model: any){
    return this.http.post(this.baseUrl + 'Account/Login', model);
  }
}
