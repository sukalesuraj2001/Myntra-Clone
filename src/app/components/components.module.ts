import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddressComponent } from './address/address.component';
import { CrouselComponent } from './crousel/crousel.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { RatingComponent } from './rating/rating.component';
import {MatButtonModule} from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EthenticWearComponent } from '../products/ethentic-wear/ethentic-wear.component';
import { ProfileComponent } from './profile/profile.component';
import { WishlistComponent } from './wishlist/wishlist.component';



@NgModule({
  declarations: [
    AboutComponent,
    AddressComponent,
    OrderComponent,
    PaymentComponent,
    ProfileComponent,
    WishlistComponent,
    CartComponent, 
    EthenticWearComponent,
    RatingComponent,


  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule,
  ]
})
export class ComponentsModule { }
