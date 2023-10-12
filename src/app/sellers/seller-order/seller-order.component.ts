import { Component } from '@angular/core';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-seller-order',
  templateUrl: './seller-order.component.html',
  styleUrls: ['./seller-order.component.css']
})
export class SellerOrderComponent {

  constructor(private sellerService:SellerService){}
  ngOnInit(data:any): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.sellerService.getOrders(data).subscribe((res)=>{
      console.log("the orders are"+JSON.stringify(res));
      
    })
  }



}
