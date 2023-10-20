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
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  // cdata1= new ProductService();
  constructor(
    private ps1: ProductService,
    private cartService: CartService,
    private router: Router,
    private slider: SlidersService
  ) {}

  products: Product[] = [];
  slide: Product[] = [];
  cat: Cat[] = [];

  category = 'CATEGORY SPECIALS';
  ngOnInit(): void {
    this.slider.getSlider1().subscribe((res: any) => {
      this.slide = res;
      // console.log("the silders are"+JSON.stringify(res));
    });

    sessionStorage.removeItem('cat');

    this.ps1.getCat().subscribe((res: any) => {
      this.products = res;
      // console.log("category called"+JSON.stringify(res));
    });

   
  }

  userId() {
    return localStorage.getItem('userId');
  }

  setCategory(x: any) {
    sessionStorage.setItem('cat', x);
  }
}
