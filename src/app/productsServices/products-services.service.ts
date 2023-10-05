import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsServicesService {
 
  private apiUrl = 'http://localhost:3000';
  constructor(private http:HttpClient) { }
 
  // getCategory(){
  //   const x=sessionStorage.getItem('cat')
  //   return this.http.get(`${this.apiUrl}/Cat?cat=${x}`);
  
  // }
  getCategory(){
    const x=sessionStorage.getItem('cat')
    return this.http.get(`${this.apiUrl}/Product?cat=${x}`);
  
  }
}
