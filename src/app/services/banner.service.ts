import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product_data/product';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private apiUrl = 'http://localhost:3000';
  constructor( private http:HttpClient) { }
// banner Api start
getBanner():Observable<Product[]>{
  return this.http.get<Product[]>(`${this.apiUrl}/Banner`,);
  
  // banner Api end
}




}
