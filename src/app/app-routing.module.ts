import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { HomeComponent } from './sellers/home/home.component';
import { SellerRegisterComponent } from './sellers/seller-register/seller-register.component';
import { EthenticWearComponent } from './products/ethentic-wear/ethentic-wear.component';
import { AddProductComponent } from './sellers/add-product/add-product.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditprofileComponent } from './components/editprofile/editprofile.component';
import { AboutComponent } from './components/about/about.component';
import { AllCustomersComponent } from './sellers/all-customers/all-customers.component';
import { OrderComponent } from './components/order/order.component';
import { SellerOrderComponent } from './sellers/seller-order/seller-order.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { AddressComponent } from './components/address/address.component';


const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard], title: ' SHOPPING BAG' },
  {
    path: 'Productdetails',
    component: ProductDetailsComponent,
    title: 'Myntra | Product Details',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Myntra | Register',
  },  {
    path: 'sellerhome',
    component: HomeComponent,
    title: 'Myntra | sellerhome',
  }, {
    path: 'sellerregister',
    component: SellerRegisterComponent,
    title: 'Myntra | sellerhome',
  }, {
    path: 'ethenticWear',
    component: EthenticWearComponent,
    title: 'Myntra | sellerhome',
  },{
    path: 'addProduct',
    component: AddProductComponent,
    title: 'Myntra | sellerhome',
  },{
    path: 'profile',
    component: ProfileComponent,
    title: 'Myntra | profile',
  }, {
    path: 'editprofile',
    component: EditprofileComponent,
    title: 'Myntra | Edit-Profile',
  },{
    path: 'about',
    component: AboutComponent,
    title: 'Myntra | About Us',
  }, {
    path: 'customer',
    component: AllCustomersComponent,
    title: 'Myntra | customer',
  },{
    path: 'order',
    component: OrderComponent,
    title: 'Myntra | order',
  }, {
    path: 'sellerOrder',
    component: SellerOrderComponent,
    title: 'Myntra | sellerOrder',
  }, {
    path: 'Product/:id',
    component: ProductDetailsComponent,
    title: 'Myntra | product-detail',
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
    title: 'Myntra | Wishlist',
  },
  {
    path: 'address',
    component: AddressComponent,
    title: 'Myntra | Address',
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
