import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/product_data/cart';
import { Cat } from 'src/app/product_data/cat';
import { Product } from 'src/app/product_data/product';
import { ProductsServicesService } from 'src/app/productsServices/products-services.service';
import { CartService } from 'src/app/services/cart.service';
import { FiltersService } from 'src/app/services/filters.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-ethentic-wear',
  templateUrl: './ethentic-wear.component.html',
  styleUrls: ['./ethentic-wear.component.css']
})
export class EthenticWearComponent {
counter:any
constructor(private ps1:ProductsServicesService,private ps2:ProductService,private cartService:CartService
  ,private router:Router,private filter:FiltersService){}
ethentic:Cat[]=[]
ngOnInit(): void {



  this.ps1.getCategory().subscribe((result:any)=>{
    console.log("ethentic called");
    console.log(result);
    
    this.ethentic=result
    const entries = Object.entries(result);
      this.counter = entries.length;
      console.log('Counter is ' + this.counter);
    const x=sessionStorage.getItem('cat')
    console.log(x);
    
  })
}
userId(){
  return localStorage.getItem("userId")


}


// add to cart functionality start
addToCart(data: Cart) {
  const token = localStorage.getItem('token');
  if (!token) {
    alert("You need to log in to add products to the cart.");
    this.router.navigate(['cart'])
    return;
  }

  this.ps2.incrementCart();
  console.log(data.id);
 
  this.cartService.getCart(data as Cart).subscribe((responseData: any) => {
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
      data.userId=localStorage.getItem("userId")?? ""
      this.cartService.addInCart(data).subscribe((result) => {
        alert("Product added Successfully!");
        this.router.navigate(['cart'])
        console.log(data);
        window.location.reload();
        // console.log("the userid is "+this.userId());
        
      });
    }
  });
}



// filter functionality

lessThan() {
  this.filter.getProducts().subscribe((res) => {
    // console.log("The filtered products are: " + JSON.stringify(res));
    // If you want to use the filtered products in your component, assign them to a variable.
    // this.filteredProducts = res;
  });
}

  
}
