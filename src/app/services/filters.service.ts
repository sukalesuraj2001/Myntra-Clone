import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http:HttpClient) { }


  getProducts() {
    return this.http.get(`${this.apiUrl}/Product?price<300`);
  }
  


}
