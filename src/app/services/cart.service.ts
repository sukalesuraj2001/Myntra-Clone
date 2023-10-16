import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Product } from '../product_data/product';
import { Cart } from '../product_data/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient,private router:Router) { }
 
  // retirve cart products
  getCart(cartdata:Cart):Observable<Cart[]> {
    // this.router.navigate(['cart'])
    return this.http.get<Cart[]>(`${this.apiUrl}/Cart?userId=${localStorage.getItem("userId")}`)
  }

  // Add a product to the cart if it is not present
    addInCart(data:Cart):Observable<Cart[]>{
      
      return this.http.post<Cart[]>(`${this.apiUrl}/Cart?userId=${localStorage.getItem("userId")}`, data);

 }

//  remove product from cart
removeCart(itemId: number) {
  return this.http.delete(`${this.apiUrl}/Cart/${itemId}`);
}


getCat():Observable<Cart>{
  return this.http.get<Cart>(`${this.apiUrl}/Cat`)

}



// wishlist api start

getWishlist(result:Product):Observable<Product>{
  return this.http.post<Product>(`${this.apiUrl}/Wishlist`,result);

}
wishlist():Observable<Product>{
  const x=localStorage.getItem('userId')
    return this.http.get<Product>(`${this.apiUrl}/Wishlist?userId=${x}`);
}
  }
  