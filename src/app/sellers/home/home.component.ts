import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/product_data/product';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
counter:number=0
isSidebarActive = true;


  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private sellerService:SellerService,private auth:AuthService,private ps1:ProductService){}

products:number=0;
item:Product[]=[];

ngOnInit(data:any): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.auth.userLogin(data).subscribe((res)=>{
  // console.log("count is call");
  const data=JSON.stringify(res)
  // console.log("count is call"+data);




  const entries = Object.entries(res);
  this.counter=entries.length
    // console.log("Counter is " + this.counter);

    for (const [key, value] of entries) {
      // console.log(`Key: ${key}, Value: ${value}`);
      // You can process each key-value pair here

    }
  
  })



  // for products
  this.ps1.getProducts().subscribe((res:any)=>{
    this.item=res
    const entries = Object.entries(res);
  this.products=entries.length
    // console.log("Counter is " + this.counter);

    for (const [key, value] of entries) {
      // console.log(`Key: ${key}, Value: ${value}`);
      // You can process each key-value pair here

    }

  })
}


// remove(item: Product) {
//   this.sellerService.removeProduct(item.id).subscribe(
//     (result) => {
//     alert("product deleted successfully!")
//       const index = this.products.findIndex((cartItem) => cartItem.id === item.id);
//       if (index !== -1) {
//         this.products.splice(index, 1);
//       }
//     },
//     (error) => {
//      alert(error)
//     }
//   );
// }


showFiller = true;

toggleSidebar() {
  this.isSidebarActive = !this.isSidebarActive;
}




// remove product 

removeProduct(itemId: number) {
  this.sellerService.removeProduct(itemId).subscribe(() => {
    alert("Product deleted successfully");
    window.location.reload()
    // Add any additional logic you need after the product is deleted.
  });
}



}
