import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product_data/product';
import { CartService } from 'src/app/services/cart.service';
import { PlaceOrderService } from 'src/app/services/place-order.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
// item.qty:number=1

  cartItems: Product[] = [];
  totalPrice:any;
  constructor(private cartService: CartService,private ps1:ProductService,private router:Router,private orderservice:PlaceOrderService) {}

ngOnInit(cartdata:any): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
// if (localStorage.getItem("userId")) {
  
// } else {
  
// }
  this.cartService.getCart(cartdata).subscribe((result:any)=>{
    console.log("cartproduct loaded successfully!");
    this.cartItems=result
   
    
    this.router.navigate(['cart'])
    
  })
  
}

increase(item: any) {
  item.qty++;
}

decrease(item: any) {
  if (item.qty > 0) {
    item.qty--;
  }


}


remove(item: Product) {
  this.cartService.removeCart(item.id).subscribe(
    (result) => {
    alert("product deleted successfully!")
    window.location.reload()
      const index = this.cartItems.findIndex((cartItem) => cartItem.id === item.id);
      if (index !== -1) {
        this.cartItems.splice(index, 1);
      }
    },
    (error) => {
     alert(error)
    }
  );
}





// place order functionality

placeOrder(item: any) {
  // Calculate the total price for the current item
  item.totalprice = item.price * item.qty;
  
  const data = JSON.stringify(item);
  console.log("the product is " + data);
  item.userId = localStorage.getItem("userId");

  // Now, send the item, including the calculated totalprice, to your service
  this.orderservice.addProduct(item).subscribe((res) => {
    console.log("Product added successfully");
    // You may want to reset the item's quantity or remove it from the cart here.
  });
}


}