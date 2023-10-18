import { Component } from '@angular/core';
import { Profile } from 'src/app/product_data/profileData';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  constructor(private auth: AuthService) {}
  acc: string = '';
  profiledata: Profile[] = [];
  userName: string = '';

  ngOnInit(data: Profile): void {
    // retrive username from localStorage
    this.acc = localStorage.getItem('userName') ?? '';

    this.auth.getProfile(data as Profile).subscribe((res) => {
      this.profiledata = res;
      if (this.profiledata.length > 0) {
        console.log("the address is " + this.profiledata[0].address1);
        localStorage.setItem("address",JSON.stringify(this.profiledata[0].address1))
      } else {
        console.log("Profile data is empty or undefined.");
      }
      
      const data = JSON.stringify(this.profiledata);
     
    });
  }
}
