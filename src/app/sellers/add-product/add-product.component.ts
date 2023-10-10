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
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  
  
    
  }

  profileForm = new FormGroup({
    productName: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    category: new FormControl('', [Validators.required]),
    price: new FormControl('', [ Validators.required,Validators.minLength(8), ]),
    totalprice: new FormControl('', [ Validators.required,Validators.minLength(8), ]),
    image: new FormControl('', [ Validators.required ]),
    
    qty: new FormControl('', [ Validators.required,Validators.minLength(8), ]),
    rating: new FormControl('', [ Validators.required,Validators.minLength(8), ]),
  });

  
  




  // onImageSelect(event: any) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     this.image = file;
  //     this.profileForm.get('image')?.setValue(file);
  //   }
  // }
  



  
 
  onSubmit(data:any) {
    data.sellerId=sessionStorage.getItem("sellerId")
   this.seller.addProduct(data).subscribe()
   alert( "Product added successfully!");
  
   
   console.log("the data is "+JSON.stringify(this.profileForm.value.image));
   
  
   setTimeout(() => {
    // window.location.reload()
   }, 1000);
   
  }
  




}
