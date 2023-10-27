import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddressComponent } from './address/address.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from '../guards/auth-guard.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { EthenticWearComponent } from '../products/ethentic-wear/ethentic-wear.component';
import { ProfileComponent } from './profile/profile.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    title: 'Myntra | About Us',
  },

  {
    path: 'address',
    component: AddressComponent,
    title: 'Myntra | Address',
  },

  {
    path: 'order',
    component: OrderComponent,
    title: 'Myntra | order',
  },
  { path: 'cart', component: CartComponent, canActivate:[AuthGuard], title: ' SHOPPING BAG' },
 
  {
    path: 'ethenticWear',
    component: EthenticWearComponent,
    title: 'Myntra | sellerhome',
  },

  {
    path: 'wishlist',
    component: WishlistComponent,
    title: 'Myntra | Wishlist',
  },


  {
    path: 'profile',
    component: ProfileComponent,
    title: 'Myntra | profile',
  },


  {
    path: 'payment',
    component: PaymentComponent,
    title: 'Myntra |payment',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
