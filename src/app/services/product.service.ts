import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../product_data/product';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 

  constructor(private http:HttpClient,private router:Router) { }


  private apiUrl = 'http://localhost:3000';

//  cartcount functionality start

private cartcount=0;
sub =new Subject<number>();
incrementCart(){
  this.cartcount++;
  this.sub.next(this.cartcount);
  console.log("this is product service"+this.cartcount);
  
}
decrementCart(){
  this.sub.next(this.cartcount)
  this.cartcount--;
}
getcount(){
  return this.cartcount;
}


getCat(){
  return this.http.get(`${this.apiUrl}/Cat`);
}







  getProducts(){
    const x=sessionStorage.getItem('sellerId')
    return this.http.get(`${this.apiUrl}/Product?sellerId=${x}`);
  }


  getShoes():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiUrl}/Product?cat=shoes`);

  }


  productDetails(data:any){
    console.log(data);
    
    // return this.http.get(`${this.apiUrl}/Product`,data)

  }


  // add to cart api

  // cartProductById(id:string){
  //   return this.http.post(`http://localhost:3000/Product`,{ProductId : id},{})
  //   // console.log(id);
    
  // }




}
