import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Profile } from 'src/app/product_data/profileData';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent {
constructor(private auth:AuthService,private router:Router){}

  namectrl = new FormControl('');
  

  // formGroup

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobileNumber: new FormControl(''),
    address1: new FormControl(''),
    address2: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    image: new FormControl(''),
  
 
  });



  formsubmit(data: Partial<Profile>): void {
    console.log(data.address1);
  
    // sessionStorage.setItem("address", JSON.stringify(data.address1));
    sessionStorage.setItem("profileData", JSON.stringify(data));
    
    // Ensure that 'userId' is set from localStorage
    data.userId = localStorage.getItem("userId") || "";
  
    this.auth.addProfile(data as Profile).subscribe((res) => {
      alert("Profile Edited Successfully!");
      this.router.navigate(['/profile']);
    });
  }
  
  
}