import { Component } from '@angular/core';
import { Product } from 'src/app/product_data/product';
import { Profile } from 'src/app/product_data/profileData';
import { AuthService } from 'src/app/services/auth.service';
import { PlaceOrderService } from 'src/app/services/place-order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  constructor(
    private placeOrder: PlaceOrderService,
    private auth: AuthService
  ) {}
  products: Product[] = [];
  profile: any;
  currentDate: Product[] = [];
  ngOnInit(data: any): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.placeOrder.getProduct(data).subscribe((data: any) => {
      this.products = data;
    });

    this.placeOrder.getProfile(data).subscribe((res) => {
      this.profile = res;
    });
  }

  removeProduct(productId: number) {
    this.placeOrder.removeProduct(productId).subscribe(() => {
      alert('Product removed successfully');
      window.location.reload();
    });
  }

  makePayment(products: any) {
    this.auth.getProfile(products).subscribe((res) => {
      const orderID = this.generateRandomOrderID();

      products = products.map((product: any) => {
        return { ...product, orderid: orderID, profile: res };
      });

      this.placeOrder.orderProduct(products).subscribe(() => {
        alert('Products bought successfully');
      });
    });
  }

  generateRandomOrderID(): string {
    const min = 1000;
    const max = 9999;
    const orderID = Math.floor(Math.random() * (max - min + 1)) + min;

    return orderID.toString();
  }
}


