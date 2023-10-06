import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  namectrl = new FormControl('');

  constructor(private fb: FormBuilder,private seller:SellerService) {}

  profileForm = new FormGroup({
    productName: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    category: new FormControl('', [Validators.required]),
    price: new FormControl('', [ Validators.required,Validators.minLength(8), ]),
    totalprice: new FormControl('', [ Validators.required,Validators.minLength(8), ]),
    image: new FormControl('', [ Validators.required,Validators.minLength(8), ]),
    qty: new FormControl('', [ Validators.required,Validators.minLength(8), ]),
    rating: new FormControl('', [ Validators.required,Validators.minLength(8), ]),
  });

  onSubmit(data:any) {
   this.seller.addProduct(data)
   console.log( "Product addes successfully!");
   
  }
  




}
