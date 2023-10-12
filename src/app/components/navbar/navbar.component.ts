import { animate, state, style, transition, trigger } from '@angular/animations';
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
  animations: [
    trigger('slideIn', [
      state('void', style({ opacity: 0, transform: 'translateY(-200%)' })),
      transition(':enter, :leave', [animate('400ms ease')])
    ])
  ]

})
export class NavbarComponent {
  // const seller=localStorage.getItem("seller")
  counter=0
  search = ""; 
  cartcount = 0;
  count = new Subject<number>();
  sub = new Subscription();


  logoutSucess = false;
  logoutAttempt = false;

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
      this.logoutSucess=false
      setTimeout(() => {
        window.location.reload()
      }, 2000);
    } else {
      this.logoutSucess=true
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('userName');
      sessionStorage.removeItem("profileData")
      // sessionStorage.removeItem("address")
      setTimeout(() => {
        window.location.reload()
      }, 2000);
   
    }
    this.logoutAttempt=true
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
