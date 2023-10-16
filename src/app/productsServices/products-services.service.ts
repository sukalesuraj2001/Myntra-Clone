import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product_data/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsServicesService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getCategory(): Observable<Product[]> {
    const x = sessionStorage.getItem('cat');
    return this.http.get<Product[]>(`${this.apiUrl}/Product?category=${x}`);
  }
}
