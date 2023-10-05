import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }


userRegister(userData:any){

  return this.http.post(`${this.apiUrl}/User`,userData);
}

userLogin(userData:any){


  return this.http.get(`${this.apiUrl}/User`,userData);
  

  
}


}
