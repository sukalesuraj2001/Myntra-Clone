import { Component } from '@angular/core';
import { Product } from 'src/app/product_data/product';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private sellerService:SellerService){}

products:Product[]=[]

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.sellerService.getProducts().subscribe((res:any)=>{
    console.log("seller called");
    this.products=res
    
  })
  
}


remove(item: Product) {
  this.sellerService.removeProduct(item.id).subscribe(
    (result) => {
    alert("product deleted successfully!")
      const index = this.products.findIndex((cartItem) => cartItem.id === item.id);
      if (index !== -1) {
        this.products.splice(index, 1);
      }
    },
    (error) => {
     alert(error)
    }
  );
}


}
