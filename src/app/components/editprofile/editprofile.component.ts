import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  formsubmit(data: any): void {
    console.log(this.profileForm.value.address1);
    
    sessionStorage.setItem("address",JSON.stringify(this.profileForm.value.address1))
    sessionStorage.setItem("profileData", JSON.stringify(this.profileForm.value));
    data.userId=localStorage.getItem("userId")


    this.auth.addProfile(data).subscribe((res)=>{
      
      alert("Profile Edited Successfull!")
      // sessionStorage.setItem("profileData", JSON.stringify(this.profileForm.value));

      this.router.navigate(['/profile'])
    })
}
}