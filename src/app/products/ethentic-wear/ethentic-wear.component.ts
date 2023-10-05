import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cat } from 'src/app/product_data/cat';
import { ProductsServicesService } from 'src/app/productsServices/products-services.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-ethentic-wear',
  templateUrl: './ethentic-wear.component.html',
  styleUrls: ['./ethentic-wear.component.css']
})
export class EthenticWearComponent {

constructor(private ps1:ProductsServicesService,private ps2:ProductService,private cartService:CartService
  ,private router:Router){}
ethentic:Cat[]=[]
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.


  this.ps1.getCategory().subscribe((result:any)=>{
    console.log("ethentic called");
    console.log(result);
    
    this.ethentic=result
    const x=sessionStorage.getItem('cat')
    console.log(x);
    
  })
}
userId(){
  return localStorage.getItem("userId")


}


// add to cart functionality start
addToCart(data: any) {
  const token = localStorage.getItem('token');
  if (!token) {
    alert("You need to log in to add products to the cart.");
    return;
  }

  this.ps2.incrementCart();
  console.log(data.id);
 
  this.cartService.getCart(data).subscribe((responseData: any) => {
    console.log(responseData);
    let sum = 0;
    let count = 0;
    for (const key of Object.keys(responseData)) {
      const p = responseData[key];
      console.log(p);
      if (data.id === p.id) {
        sum++;
      }
    }
    if (sum > 0) {
      alert("Product Already exists");
    } else {
      data.userId=localStorage.getItem("userId")
      this.cartService.addInCart(data).subscribe((result) => {
        alert("Product added Successfully!");
        this.router.navigate(['cart'])
        console.log(data);
        // window.location.reload();
        console.log("the userid is "+this.userId());
        
      });
    }
  });
}
  
}
