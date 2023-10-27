import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/product_data/order';
import { Product } from 'src/app/product_data/product';
import { Profile } from 'src/app/product_data/profileData';
import { AuthService } from 'src/app/services/auth.service';
import { PlaceOrderService } from 'src/app/services/place-order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {

  progress: number=15;


date:string="";
orderId:number=0;
userImage:string=""
orderData:any


 constructor(private order:PlaceOrderService,private router:Router){}
 ngOnInit(data:Order): void {

  // this.progress = 15;
  this.increaseProgress();

  this.order.getOrders().subscribe((res) => {
    this.orderData=res
    
    // console.log("The data of order is:");
    res.forEach((order, index) => {
      // console.log(`Order ${index + 1}:`);
      // console.log(`Purchase Date: ${order.purchaseDate}`);
      // console.log(`Order ID: ${order.orderID}`);
      
      // console.log(`Total Amount: ${order.totalAmount}`);
      
      // Access and log user details
      if (Array.isArray(order.userDetails)) {
        const userDetails = order.userDetails[0]; // Assuming you want the first user detail
        this.userImage=userDetails.image
        // console.log("User Details:");
        // console.log(`First Name: ${userDetails.firstName}`);
        // console.log(`Last Name: ${userDetails.lastName}`);
        // console.log(`Email: ${userDetails.email}`);
        // console.log(`Mobile Number: ${userDetails.mobileNumber}`);
        // console.log(`Address 1: ${userDetails.address1}`);
        // console.log(`Address 2: ${userDetails.address2}`);
        // console.log(`City: ${userDetails.city}`);
        // console.log(`State: ${userDetails.state}`);
        // console.log(`Image: ${userDetails.image}`);
        console.log(`UserId is: ${userDetails.userId}`);
      }
  
      // Access and log selected items
      if (Array.isArray(order.selectedItems)) {
        console.log("Selected Items:");
        order.selectedItems.forEach((item, itemIndex) => {
          // console.log(`Item ${itemIndex + 1}:`);
         
          // console.log(`Product Name: ${item.productName}`);
          // console.log(`Description: ${item.description}`);
          // console.log(`Category: ${item.category}`);
          // console.log(`Price: ${item.price}`);
          // console.log(`Total Price: ${item.totalprice}`);
          // console.log(`Image: ${item.image}`);
          // Add more fields as needed
        });
      }
      
      console.log(`ID: ${order.id}`);
      console.log(); 
    });
  });
  
  
 }


 cancelOrder(data:Order){



  this.order.removeOrder(data).subscribe((res)=>{
    alert("Your Order is Successfully Canceled")
    this.router.navigate(['/'])
  })
 }




 increaseProgress() {
  const interval = 20000; 
  const step = 10; 

  const increaseInterval = () => {
    this.progress += step;

    if (this.progress >= 100) {
      this.progress = 100; 
    }

    if (this.progress < 100) {
      setTimeout(increaseInterval, interval);
    }
  };

  setTimeout(increaseInterval, interval);
}



orderDetails(data:Order){
 console.log("the data is"+JSON.stringify(data.orderID))
 console.log("the data is"+JSON.stringify(data.purchaseDate))
 this.date=JSON.parse(data.purchaseDate)
 this.orderId=data.orderID
 
 
}



}


