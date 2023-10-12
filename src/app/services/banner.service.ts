import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private apiUrl = 'http://localhost:3000';
  constructor( private http:HttpClient) { }

getBanner(){
  return this.http.get(`${this.apiUrl}/Banner`,);

}




}
