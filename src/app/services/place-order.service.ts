import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../product_data/cart';
import { Observable } from 'rxjs';
import { Order } from '../product_data/order';

@Injectable({
  providedIn: 'root'
})
export class PlaceOrderService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http:HttpClient) { }


  addProduct(data:any){
    return this.http.post(`${this.apiUrl}/Buy`, data);
  }


  getProduct(data:any){
    return this.http.get(`${this.apiUrl}/Buy`);
  }

  getProfile(data:any){

    const x=localStorage.getItem("userId")
    return this.http.get(`${this.apiUrl}/Profile?userId=${x}`);
  }

  removeProduct(itemId: number) {
    return this.http.delete(`${this.apiUrl}/Buy/${itemId}`);
  }
  orderProduct(data: any) {
    return this.http.post(`${this.apiUrl}/Buy`, data);
  }
  
  getOrder(){
    const x=localStorage.getItem("userId")
    return this.http.get(`${this.apiUrl}/Buy?userId=${x}`);

  }
  placeOrder(data:Order):Observable<Order[]>{
    return this.http.post<Order[]>(`${this.apiUrl}/Order`,data);
  }
  removeOrder(data: Order): Observable<any> {
    const id = data.id; // Get the 'id' from the 'data' parameter
    return this.http.delete(`${this.apiUrl}/Buy/${id}`);
  }
  
  getOrders():Observable<Order[]>{
    const x=localStorage.getItem("userId")
    return this.http.get<Order[]>(`${this.apiUrl}/Order?userId=${x}`); 
  }
  
  
  
  
 
}
