import { Component } from '@angular/core';
import { Profile } from 'src/app/product_data/profileData';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

username:string="";
address:any;
mobileNo:any;
profiledata:Profile[]=[]

constructor(private auth:AuthService){}
ngOnInit(data:Profile): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.username=localStorage.getItem("userName")?? "";
  // this.address=localStorage.getItem("address")?? "";
  this.auth.getProfile(data as Profile).subscribe((res)=>{
    this.profiledata=res
    if (this.profiledata.length > 0) {
      console.log("the address is " + this.profiledata[0].address1);
      console.log("the address is " + this.profiledata[0].mobileNumber);
      this.address=this.profiledata[0].address1
      this.mobileNo=this.profiledata[0].mobileNumber
    }

  })
}




}
