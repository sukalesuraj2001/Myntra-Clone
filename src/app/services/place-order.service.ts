import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../product_data/cart';
import { Observable } from 'rxjs';
import { Order } from '../product_data/order';
import { Profile } from '../product_data/profileData';

@Injectable({
  providedIn: 'root'
})
export class PlaceOrderService {

  user:number=0
  private apiUrl = 'http://localhost:3000';
 
  constructor(private http:HttpClient) { }


  addProduct(data:Order):Observable<Order[]>{
    return this.http.post<Order[]>(`${this.apiUrl}/Buy`, data);
  }
 

  getProduct(data:Order):Observable<Order[]>{
    return this.http.get<Order[]>(`${this.apiUrl}/Buy`);
  }

  getProfile(data:Profile):Observable<Profile[]>{

    const x=localStorage.getItem("userId")
    return this.http.get<Profile[]>(`${this.apiUrl}/Profile?userId=${x}`);
  }

  removeProduct(itemId: number) {
    return this.http.delete(`${this.apiUrl}/Buy/${itemId}`);
  }
  orderProduct(data:any) {
    return this.http.post(`${this.apiUrl}/Buy`, data);
  }
  
  getOrder(){
    const x=localStorage.getItem("userId")
    return this.http.get(`${this.apiUrl}/Buy?userId=${x}`);

  }
  placeOrder(data:Order):Observable<Order[]>{
    return this.http.post<Order[]>(`${this.apiUrl}/Order`,data);
  }
  removeOrder(data: Order): Observable<Order[]> {
    const id = data.id; 
    return this.http.delete<Order[]>(`${this.apiUrl}/Buy/${id}`);
  }
  
  getOrders():Observable<Order[]>{
    const x=localStorage.getItem("userId")
    return this.http.get<Order[]>(`${this.apiUrl}/Buy?userId=${x}`); 
  }
  
  orderDetails(data:Order):Observable<Order[]>{
   
   

    const x=localStorage.getItem("userId")
    return this.http.get<Order[]>(`${this.apiUrl}/Buy?userId=${x}`); 
  }
  
  
  
 
}
