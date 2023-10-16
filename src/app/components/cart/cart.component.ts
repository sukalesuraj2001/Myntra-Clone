import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import items from 'razorpay/dist/types/items';
import { Cart } from 'src/app/product_data/cart';
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

  selectedQuantity:number=0;
 discount=40;
 shipping=40;
// item.qty:number=1
selectedItemCount: number = 0;

selectAllItems: boolean = false; 
cartItem: any[] = []; 
counter:number=0
user:any;
address:any;
  cartItems: Product[] = [];
  totalPrice:Product[]=[];
  totalmrp:any
  amount: any;

  constructor(private cartService: CartService,private ps1:ProductService,private router:Router,private orderservice:PlaceOrderService) {}

ngOnInit(cartdata:Cart): void {

    // discount on price

  
   



  this.cartService.getCart(cartdata as Cart).subscribe((res: any) => {
    const entries = Object.entries(res);
    this.counter = entries.length;
    console.log('Counter is ' + this.counter);

   
  });

this.updateSelectedItemCount();





this.user=localStorage.getItem("userName")
this.address=sessionStorage.getItem("address")


  this.cartService.getCart(cartdata as Cart).subscribe((result:any)=>{
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


isCollapsed = true;

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }




remove(item: Product) {


  console.log("the remove product are"+JSON.stringify(item));
  
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


// qty functinality start

selectQuantity(quantity: number) {
  this.selectedQuantity = quantity;
}


// place order functionality

placeOrder() {
  // Generate a 4-digit random order ID
const orderID = Math.floor(1000 + Math.random() * 9000);

// Your existing code for handling the selected item here.
const selectedItems = this.cartItems.filter(cartItem => cartItem.selected);

const totalAmount = selectedItems.reduce((total, cartItem) => {
  const totalItemPrice = cartItem.totalprice * cartItem.qty;
  // console.log("total amt is " + totalItemPrice);
  return total + totalItemPrice;
}, 0);

this.amount = totalAmount - (totalAmount * (this.discount / 100)) + 40;
// console.log("the final amount is " + this.amount);

const orderData = {
  orderID: orderID,
  totalAmount: this.amount,
  selectedItems: selectedItems,
};

// console.log("the checkout price is " + JSON.stringify(orderData));

this.orderservice.orderProduct(orderData).subscribe(() => {
  alert("Order placed successfully!");
});

  // this.orderservice.orderProduct().subscribe(() => {
  //   alert("Product placed successfully");
  // });
}










productInfo(item:Product){
  console.log("the product are"+JSON.stringify(item));
  console.log("product name"+item.productName);
 
    this.totalmrp=item.totalprice
  
  
  

}

selectAllItemsChanged() {
  for (const item of this.cartItems) {
    item.selected = this.selectAllItems;
  }
  this.totalmrp = this.cartItems.reduce((total, cartItem) => {
    if (cartItem.selected) {
      total += cartItem.totalprice;
    }
    return total;
  }, 0);
  this.updateSelectedItemCount();
 

}
checkItem(item: any) {
  if (!item.selected) {
    this.selectAllItems = false;
  }
  for (const item of this.cartItems) {
    if (item.selected) {
      // this.placeOrder();
    }
  }
  // Calculate total MRP based on selected items
  this.totalmrp = this.cartItems.reduce((total, cartItem) => {
    if (cartItem.selected) {
      total += cartItem.totalprice * cartItem.qty;
    }
    return total;
  }, 0);
  this.updateSelectedItemCount();

}


updateSelectedItemCount() {
  this.selectedItemCount = this.cartItems.filter(item => item.selected).length;
}

}