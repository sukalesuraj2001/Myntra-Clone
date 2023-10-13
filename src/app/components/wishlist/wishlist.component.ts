import { Component } from '@angular/core';
import { Product } from 'src/app/product_data/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
products:any;
counter:number=0
constructor(private cart:CartService){}
ngOnInit(): void {
this.cart.wishlist().subscribe((res:any)=>{
  this.products=res
  console.log("the wishlist are"+JSON.stringify(res));
  const entries = Object.entries(res);
  this.counter=entries.length
    console.log("Counter is " + this.counter);
  
})
  
}



remove(data:any){
alert("the product remove from whishlist");

}

}
