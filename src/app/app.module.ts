import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatDividerModule} from '@angular/material/divider';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { RatingComponent } from './components/rating/rating.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { CrouselComponent } from './components/crousel/crousel.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
// import {MatGridListModule} from '@angular/material/grid-list';

import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

import { MatInputModule } from '@angular/material/input';
import { CartComponent } from './components/cart/cart.component';
import {MatMenuModule} from '@angular/material/menu';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HomeComponent } from './sellers/home/home.component';
import { SellerRegisterComponent } from './sellers/seller-register/seller-register.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
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
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PaymentComponent } from './components/payment/payment.component';
// import { DashboardComponent } from './sellers/dashboard/dashboard.component';
// import { HeaderComponent } from './sellers/header/header.component';
// import { CarouselModule } from '@coreui/angular';












@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    RatingComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    CrouselComponent,
    CartComponent,
    ProductDetailsComponent,
    HomeComponent,
    SellerRegisterComponent,
    EthenticWearComponent,
    AddProductComponent,
    ProfileComponent,
    EditprofileComponent,
    AboutComponent,
    AllCustomersComponent,
    OrderComponent,
    SellerOrderComponent,
    WishlistComponent,
    AddressComponent,
    NotfoundComponent,
    PaymentComponent,
    // DashboardComponent,
    // HeaderComponent,
    // CasualWearComponent,
    // ActiveWearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatStepperModule,
    MatSidenavModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    MatCheckboxModule,
    MatRadioModule

    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
