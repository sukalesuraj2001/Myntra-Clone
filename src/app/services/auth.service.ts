import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../product_data/register';
import { Observable } from 'rxjs';
import { Profile } from '../product_data/profileData';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  // user login and registration Api start

  userRegister(userData: Register): Observable<Register> {
    return this.http.post<Register>(`${this.apiUrl}/User`, userData);
  }

  userLogin(userData: any) {
    return this.http.get(`${this.apiUrl}/User`, userData);
  }
  // user login and registration Api end

  // userProfile start

  addProfile(data: Profile): Observable<Profile[]> {
    return this.http.post<Profile[]>(`${this.apiUrl}/Profile`, data);
  }

  getProfile(userdata: Profile): Observable<Profile[]> {
    const x = localStorage.getItem('userId');
    return this.http.get<Profile[]>(`${this.apiUrl}/Profile?id=${x}`);
  }
   // userProfile end
}
