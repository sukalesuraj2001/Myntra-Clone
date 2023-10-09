import { Component } from '@angular/core';
import { Register } from './seller';
import { SellerService } from 'src/app/services/seller.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller-register',
  templateUrl: './seller-register.component.html',
  styleUrls: ['./seller-register.component.css']
})
export class SellerRegisterComponent {
  showLoginForm = true;




  constructor(  private router: Router,private sellerService:SellerService ) {}
  //  for register Seller
  namectrl = new FormControl('');

  // formGroup

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  formsubmit(sellerData: any): void {
  console.log(sellerData);
  this.sellerService.sellerRegister(sellerData).subscribe((result)=>{
    
  })
  alert("Seller Register Successfully!")

  
  }
// Seller register section end
  

  // Seller login section start

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  onLoginSubmit(userData: any) {
    console.log(this.loginForm.value);
    console.log(this.loginForm.value.email);
    console.log(this.loginForm.value.password);

    this.sellerService.getSeller(userData).subscribe((responseData:any)=>{
      let count=0;
      responseData && responseData.forEach((element: any)=>{
        console.log(element.email);
        if(
          element.email===this.loginForm.value.email && element.password === this.loginForm.value.password
           ){
            count++;
            sessionStorage.setItem('sellerId', element.id);
           }
        
      });
      if (count > 0) {
        alert('success');
        localStorage.setItem(
          'seller',
          this.loginForm.value.email + ' ' + this.loginForm.value.password
        );
        
        this.router.navigate(['sellerhome']);
        setTimeout(() => {
          window.location.reload()
        }, 10);
       
      } else {
        alert('invalid email and password');
      }
    });


  }



}
