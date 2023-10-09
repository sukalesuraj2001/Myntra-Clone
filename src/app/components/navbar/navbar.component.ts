import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { Product } from 'src/app/product_data/product';
import { Register } from 'src/app/sellers/seller-register/seller';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  // const seller=localStorage.getItem("seller")
  counter=0
  search = ""; 
  cartcount = 0;
  count = new Subject<number>();
  sub = new Subscription();

  constructor(
    private ps2: ProductService,
    private router: Router,
    private sellerService: SellerService,
    private cartService:CartService
  ) {}
  ngOnInit(data: object): void {
    this.count = this.ps2.sub;
    this.search = localStorage.getItem("userName")?? "";
    this.cartService.getCart(data).subscribe((res: any) => {
      const entries = Object.entries(res);
    this.counter=entries.length
      console.log("Counter is " + this.counter);
  
      for (const [key, value] of entries) {
        console.log(`Key: ${key}, Value: ${value}`);
        // You can process each key-value pair here

      }
    });
  }
  
  
  
  getCartCount() {}

  showDropdown = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  logout() {
    if (localStorage.length === 0) {
      alert('You are already Logout');
    } else {
      alert('Logout Successfully!');
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('userName');
      sessionStorage.removeItem("profileData")
      window.location.reload()
   
    }
  }

  seller = localStorage.getItem('seller');

  sellerLogout() {
    localStorage.removeItem('seller');
    sessionStorage.removeItem("sellerId")
    this.router.navigate(['/']);
    setTimeout(() => {
      window.location.reload();
    }, 10);
  }








}
