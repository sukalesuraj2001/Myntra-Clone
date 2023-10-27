import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Order } from 'src/app/product_data/order';
import { PlaceOrderService } from 'src/app/services/place-order.service';
 declare var Razorpay:any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
amount:number=0
user:string=""
orders:Order[]=[]
  constructor(private order:PlaceOrderService){}
  ngOnInit(): void {

this.user=localStorage.getItem("userName")?? ""

   




    this.order.getOrders().subscribe((res) => {
      this.orders=res
      console.log("the data of order is"+JSON.stringify(res));
      

      if (Array.isArray(res)) {
        console.log("The data of order table is:");
        res.forEach((order, index) => {
          this.amount=order.totalAmount
          console.log(`Order ${index + 1}:`);
          console.log(`Purchase Date: ${order.purchaseDate}`);
          console.log(`User Details:`, order.userDetails);
          console.log(`Order ID: ${order.orderID}`);
          console.log(`Total Amount: ${order.totalAmount}`);
          console.log("Selected Items:");

         
          console.log(`ID: ${order.id}`);
          console.log(); // Add a blank line for separation
        });
      } else {
        console.log("Invalid response. Expected an array of orders.");
      }
    });
  }
  

deleteOrder(data:Order){
 

}
  payNow(){
   
    // this.order.removeOrder(data).subscribe((res) => {
    //   alert("product remove successfully")
    //    });




    const options = {
      desc:'sample Razorpay demo',
      currency:'INR',
      amount:this.amount*100,
      name:this.user,
      key:'rzp_test_MMpI28g85J3pM6',
      image:"https://tse2.mm.bing.net/th?id=OIP.VcciMU8ilT7r6587cVLywgHaFg&pid=Api&P=0&h=180",
      prefill:{
        name:this.user,
      


      },
      theme:{
       color:'#f37259'
      },
      modal:{
        ondismiss:()=>{
          console.log("onDismiss");
        }

      }



  }
  const successCallback=(paymentid:any)=>{
    console.log(paymentid)
  }

  const failureCallback=(e:any)=>{
    console.log(e+'Payment failed');
  }

  Razorpay.open(options, successCallback, failureCallback)

  }













  
}
