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

// userProfile start

addProfile(data:any){

  return this.http.post(`${this.apiUrl}/Profile`,data);

}

getProfile(userdata:any){

const x=localStorage.getItem('userId')
    return this.http.get(`${this.apiUrl}/Profile?id=${x}`);

}


}
