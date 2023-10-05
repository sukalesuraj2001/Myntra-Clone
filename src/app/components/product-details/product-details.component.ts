import { Component } from '@angular/core';
import { Product } from 'src/app/product_data/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
products:Product[]=[]
constructor(private ps1:ProductService){}


product(data:any){
  this.ps1.productDetails(data)
  console.log("api called");
  
  // .subscribe(()=>{

  //   console.log("product api called");
  // })
  

}



}
