import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlaceOrderService } from 'src/app/services/place-order.service';
 declare var Razorpay:any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
amount:number=0
  constructor(private order:PlaceOrderService){}
  ngOnInit(): void {
    this.order.getOrders().subscribe((res) => {
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
          // order.selectedItems.forEach((item, itemIndex) => {
          //   console.log(`Item ${itemIndex + 1}:`);
          //   console.log(`Product Name: ${item.productName}`);
          //   console.log(`Description: ${item.description}`);
          //   console.log(`Category: ${item.category}`);
          //   // Log other item properties here
          // });
          console.log(`ID: ${order.id}`);
          console.log(); // Add a blank line for separation
        });
      } else {
        console.log("Invalid response. Expected an array of orders.");
      }
    });
  }
  


  payNow(){
   
    const options = {
      desc:'sample Razorpay demo',
      currency:'INR',
      amount:this.amount*100,
      name:'Suraj ',
      key:'rzp_test_MMpI28g85J3pM6',
      image:"https://tse2.mm.bing.net/th?id=OIP.VcciMU8ilT7r6587cVLywgHaFg&pid=Api&P=0&h=180",
      prefill:{
        name:"Suraj Sukale",
        email:"srsukale20@gmail.com",
        mobileNo:9112768829,


      },
      theme:{
       color:'#f37254'
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













  // @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;

  // ngOnInit(): void {
  //   window.paypal.Buttons(
      
    
  //     {
  //       style:{
  //         layout:'horizontal',
  //         color:'blue',
  //         shape:'rect',
  //         label:'paypal'
  //       }
  //     }
  //   ).render(this.paymentRef.nativeElement);
  // }
}
