import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {




  constructor(private auth:AuthService){}
acc:string=""
profiledata:any={}
userName:string=""




ngOnInit(data:any): void {
 
   this.acc=localStorage.getItem("userName")?? "";

  


   this.auth.getProfile(data).subscribe((res)=>{
        this.profiledata=res
        const data=JSON.stringify(this.profiledata)
        console.log("data is"+data);
        
        })
   
  
}




}
