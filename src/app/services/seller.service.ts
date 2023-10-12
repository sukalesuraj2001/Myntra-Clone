import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }


sellerRegister(sellerData:any){

  return this.http.post(`${this.apiUrl}/Seller`,sellerData);
}

getSeller(sellerData:any){

 return this.http.get(`${this.apiUrl}/Seller`);
}

getProducts(){
  return this.http.get(`${this.apiUrl}/Product`);
}

removeProduct(itemId: number) {
  return this.http.delete(`${this.apiUrl}/Product/${itemId}`);
}


addProduct(data:any){

  return this.http.post(`${this.apiUrl}/Product`,data);
}

getOrders(data: any) {
  return this.http.get(`${this.apiUrl}/Order?sellerId=${8}`, data);
}



}
