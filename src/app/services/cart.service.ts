import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Product } from '../product_data/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient,private router:Router) { }

  // retirve cart products
  getCart(cartdata:any) {
    // this.router.navigate(['cart'])
    return this.http.get(`${this.apiUrl}/Cart?userId=${localStorage.getItem("userId")}`)
  }

  // Add a product to the cart if it is not present
    addInCart(data:any){
      
      return this.http.post(`${this.apiUrl}/Cart?userId=${localStorage.getItem("userId")}`, data);

 }

//  remove product from cart
removeCart(itemId: number) {
  return this.http.delete(`${this.apiUrl}/Cart/${itemId}`);
}


getCat(){
  return this.http.get(`${this.apiUrl}/Cat`)

}



// wishlist api start

getWishlist(result:Product){
  return this.http.post(`${this.apiUrl}/Wishlist`,result);

}
wishlist(){
  const x=localStorage.getItem('userId')
    return this.http.get(`${this.apiUrl}/Wishlist?userId=${x}`);
}
  }
  