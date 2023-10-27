// import { Component } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { Profile } from 'src/app/product_data/profileData';
// import { AuthService } from 'src/app/services/auth.service';

// @Component({
//   selector: 'app-editprofile',
//   templateUrl: './editprofile.component.html',
//   styleUrls: ['./editprofile.component.css']
// })
// export class EditprofileComponent {
//   data: any;
//   editMode: boolean = false;
// userId:any
// menuOption: string | null = null;

//   constructor(private auth: AuthService, private router: Router) {}

//   ngOnInit(data:Profile): void {
//     this.auth.getProfile(data).subscribe((res: any) => {

      
//       console.log("the data " + JSON.stringify(res));
//       this.data = res[0]; // Access the first user's data
//       console.log("firstname is " + this.data.firstName);
//     });
    
//   }

//   namectrl = new FormControl('');

//   // formGroup
//   profileForm = new FormGroup({
//     firstName: new FormControl('', Validators.required),
//     lastName: new FormControl('', Validators.required),
//     email: new FormControl('', [Validators.required, Validators.email]),
//     mobileNumber: new FormControl(''),
//     address1: new FormControl(''),
//     address2: new FormControl(''),
//     city: new FormControl(''),
//     state: new FormControl(''),
//     image: new FormControl(''),
//   });


//   formsubmit(data: Partial<Profile>): void {
//     console.log(data.address1);
  
//     // Ensure that 'userId' is set from localStorage
//     data.userId = localStorage.getItem("userId") || "";
  
//     this.auth.updateProfile(data as Profile).subscribe((res) => {
//       alert("Profile Updated Successfully!");
//       this.router.navigate(['/profile']);
//     });
//   }

//   updateProfiles = new FormGroup({
//     firstName: new FormControl('', Validators.required),
//     lastName: new FormControl('', Validators.required),
//     email: new FormControl('', [Validators.required, Validators.email]),
//     mobileNumber: new FormControl(''),
//     address1: new FormControl(''),
//     address2: new FormControl(''),
//     city: new FormControl(''),
//     state: new FormControl(''),
//     image: new FormControl(''),
//   });

//   updateProfile(data: Partial<Profile>): void {
//     // Ensure that 'userId' is set from localStorage
//     data.userId = localStorage.getItem("userId") || "";
  
//     console.log("Edited Data:", data); // Log the edited data
  
   
//     this.auth.updateProfile(data as Profile).subscribe((res) => {
//       alert("Profile Updated Successfully!");
//       this.router.navigate(['/profile']);
//     });
//   }
  

//   toggleEditForm() {
//     this.editMode = !this.editMode;
//   }







//   selectMenu(option: string) {
//     this.menuOption = option;
//   }
// }
