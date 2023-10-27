import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/product_data/cart';
import { Product } from 'src/app/product_data/product';
import { ProductsServicesService } from 'src/app/productsServices/products-services.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  isWishlistClicked: boolean = false;

  selectedSize: number = 0;
  addressResult: any;
  products: Product[] = [];
  constructor(
    private ps1: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private ps: ProductsServicesService,
    private cart: CartService
  ) {}
  id!: string | null;
  result: any;
  ethentic: Product[] = [];
  currentDate: Date | null = null;

  coupon: string = '';

  ngOnInit(): void {
    this.ps.getCategory().subscribe((result: any) => {
      console.log('ethentic called');
      console.log(result);

      this.ethentic = result;
    });

    // this.currentDate = new Date();
    // const randomDays = Math.floor(Math.random() * 8) + 1;
    // this.currentDate.setDate(this.currentDate.getDate() + randomDays);
    // sessionStorage.setItem('date', JSON.stringify(this.currentDate));

    this.route.paramMap.subscribe((data) => {
      this.id = data.get('id');
      console.log('id is ' + this.id);
      if (this.id) {
        this.ps1.getProductById(this.id).subscribe((res: any) => {
          this.result = res;
        });
      }
    });

    this.coupon = this.generateRandomString(8);
    console.log('the coupon code is' + this.coupon);

    // show related products
  }

  // add to cart functionality

  addToCart(data: Cart) {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('You need to log in to add products to the cart.');
      this.router.navigate(['dashboard/cart']);
      return;
    }

    //  fire error if user is not selected size
    if (this.selectedSize === 0) {
      alert('Please select a size before adding the product to the cart.');
      return;
    }

    data.size = this.selectedSize;

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
        alert('Product Already exists');
      } else {
        data.userId = localStorage.getItem('userId') ?? '';
        this.cartService.addInCart(data).subscribe((result) => {
          alert('Product added Successfully!');
          this.router.navigate(['dashboard/cart']);
          console.log(data);
          // window.location.reload();
          // console.log("the userid is "+this.userId());
        });
      }
    });
  }

  selectSize(size: number) {
    this.selectedSize = size;
    console.log('the size is ' + this.selectedSize);
  }

  generateRandomString(length: number): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  }

  wishlist(result: Product) {
    // alert("click on wishlist")
    // console.log("the wishlist are"+JSON.stringify(result));
    result.userId = localStorage.getItem('userId') ?? '';
    this.cart.getWishlist(result).subscribe(() => {
      alert('Added to WishList');

      setTimeout(() => {
        this.router.navigate(['dashboard/wishlist']);
      }, 100);
    });
    this.isWishlistClicked = !this.isWishlistClicked;
  }

  // Initialize currentDate to null

  lookupLocation() {
    const locationInput = document.getElementById(
      'locationInput'
    ) as HTMLInputElement | null;
    const addressResult = document.getElementById(
      'addressResult'
    ) as HTMLElement | null;

    if (locationInput && addressResult) {
      const location = locationInput.value;
      const apiUrl = `https://nominatim.openstreetmap.org/search?q=${location}&format=json`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            const address = data[0].display_name;
            this.addressResult = 'Address: ' + address;

            // Update currentDate when you have a valid address
            this.currentDate = new Date();
            const randomDays = Math.floor(Math.random() * 8) + 1;
            this.currentDate.setDate(this.currentDate.getDate() + randomDays);
            sessionStorage.setItem('date', JSON.stringify(this.currentDate));
          } else {
            this.addressResult = 'Address not found for the given location';
            // Set currentDate to null when the address is not found
            this.currentDate = null;
          }
        });
    }
  }
}
