import { Component } from '@angular/core';
import { Register } from '../seller-register/seller';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.css']
})
export class AllCustomersComponent {

customers:Register[]=[]


constructor(private auth:AuthService){}
ngOnInit(data:object): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.auth.userLogin(data).subscribe((res:any)=>{
   const data=JSON.stringify(res)
   console.log("the customers are"+data);
   this.customers=res
   
  })
}


}
