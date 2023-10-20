import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getEthentic() {
    return this.http.get(`${this.apiUrl}/Product?category=Ethentic Wear`);
  }
  getCasual() {
    return this.http.get(`${this.apiUrl}/Product?category=Casual Wear`);
  }
  getActive() {
    return this.http.get(`${this.apiUrl}/Product?category=Active Wear`);
  }
  getActiveMens() {
    return this.http.get(`${this.apiUrl}/Product?category=Active Wear-mens`);
  }
  getWestern() {
    return this.http.get(`${this.apiUrl}/Product?category=Western Wear`);
  }
  getSport() {
    return this.http.get(`${this.apiUrl}/Product?category=Sport Wear`);
  }
  getLong() {
    return this.http.get(`${this.apiUrl}/Product?category=Long Wear`);
  }
  getWatches() {
    return this.http.get(`${this.apiUrl}/Product?category=Watches`);
  }

  // filter by price

  getMin() {
    return this.http.get(`${this.apiUrl}/Product?price_lte=500`);
  }
  getBet(){
    return this.http.get(`${this.apiUrl}/Product?price_gte=300&price_lte=800`);
  }
  getAbove(){
    return this.http.get(`${this.apiUrl}/Product?price_gte=900`);

  }
}
