import { Component } from '@angular/core';
import { Product } from 'src/app/product_data/product';
import { PlaceOrderService } from 'src/app/services/place-order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

constructor(private placeOrder:PlaceOrderService){}
products:Product[]=[]
profile:any
ngOnInit(data:any): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.placeOrder.getProduct(data).subscribe((data:any)=>{

     this.products=data
  })


  this.placeOrder.getProfile(data).subscribe((res)=>{
   this.profile=res
  })
}

}
