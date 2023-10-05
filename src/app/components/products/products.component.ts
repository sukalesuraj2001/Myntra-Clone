import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cat } from 'src/app/product_data/cat';
import { Product } from 'src/app/product_data/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
// cdata1= new ProductService();
constructor(private ps1:ProductService,private cartService:CartService,private router:Router){
  // this.cdata1=ps1
}

products:Product[]=[]
shoes:Product[]=[]
cat:Cat[]=[]


ngOnInit(): void {
 
  this.ps1.getProducts().subscribe((data)=>{
    console.log(data);
    this.products=data
    this.ps1.getShoes().subscribe((shoes)=>{
    console.log(shoes);
    this.shoes=shoes
    
    })
    

  })
sessionStorage.removeItem("cat")
 
}

// addToCart(data: any) {
//   this.ps1.incrementCart();
//   console.log(data.id);
//   this.cartService.getCart(data).subscribe((responseData: any) => {
//     console.log(responseData);
//     let sum=0
//     let count=0
//     for (const key of Object.keys(responseData)) {
//       const p = responseData[key];
//       console.log(p);
//       if (data.id===p.id) {

//         sum++;
        
//       }  
//     }
//     if ( sum>0) {
//       alert("Product Already exists")

      
//     }else {
//       this.cartService.addInCart(data).subscribe((result)=>{
//         alert("product added Successfully!")
        
//         window.location.reload()
        
//       })
      

//   }


//   });
// }

userId(){
  return localStorage.getItem("userId")


}





// addToCart(data: any) {
//   const token = localStorage.getItem('token');
//   if (!token) {
//     alert("You need to log in to add products to the cart.");
//     return;
//   }

//   this.ps1.incrementCart();
//   console.log(data.id);
//   data.userId=this.userId
//   this.cartService.getCart(data).subscribe((responseData: any) => {
//     console.log(responseData);
//     let sum = 0;
//     let count = 0;
//     for (const key of Object.keys(responseData)) {
//       const p = responseData[key];
//       console.log(p);
//       if (data.id === p.id) {
//         sum++;
//       }
//     }
//     if (sum > 0) {
//       alert("Product Already exists");
//     } else {
//       this.cartService.addInCart(data).subscribe((result) => {
//         console.log("the userid is "+this.userId+" and data is "+data);
//         alert("Product added Successfully!");
//         window.location.reload();
        
//       });
//     }
//   });
// }






setCategory(x:any){
  sessionStorage.setItem("cat",x)
}





}
