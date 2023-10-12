import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cat } from 'src/app/product_data/cat';
import { Product } from 'src/app/product_data/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { SlidersService } from 'src/app/services/sliders.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
// cdata1= new ProductService();
constructor(private ps1:ProductService,private cartService:CartService,private router:Router,private slider:SlidersService){
  // this.cdata1=ps1
}

products:Product[]=[]
slide:Product[]=[]
cat:Cat[]=[]

category="CATEGORY SPECIALS"
ngOnInit(): void {
 this.slider.getSlider1().subscribe((res:any)=>{
this.slide=res
console.log("the silders are"+JSON.stringify(res));

 })

sessionStorage.removeItem("cat")


this.ps1.getCat().subscribe((res:any)=>{
console.log("category called"+JSON.stringify(res));
this.products=res
})
 
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
