import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from 'razorpay/dist/types/products';
import { Observable } from 'rxjs';
import { Product } from '../product_data/product';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getEthentic(): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.apiUrl}/Product?category=Ethentic Wear`
    );
  }
  getCasual(): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.apiUrl}/Product?category=Casual Wear`
    );
  }
  getActive(): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.apiUrl}/Product?category=Active Wear`
    );
  }
  getActiveMens(): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.apiUrl}/Product?category=Active Wear-mens`
    );
  }
  getWestern(): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.apiUrl}/Product?category=Western Wear`
    );
  }
  getSport(): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.apiUrl}/Product?category=Sport Wear`
    );
  }
  getLong(): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.apiUrl}/Product?category=Long Wear`
    );
  }
  getWatches(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/Product?category=Watches`);
  }

  // filter by price

  getMin(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/Product?price_lte=500`);
  }
  getBet(): Observable<Product[]> {
    return this.http.get<Product[]>(
      `${this.apiUrl}/Product?price_gte=300&price_lte=800`
    );
  }
  getAbove(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/Product?price_gte=900`);
  }
}
