// import { CanActivateFn } from '@angular/router';

// export const authGuardGuard: CanActivateFn = (route, state) => {
//   return true;
// };




// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };
 
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ProductService } from "../services/product.service";

@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate{

constructor(private ps1:ProductService,private router:Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   const sellerGuard=localStorage.getItem("seller");

    if (localStorage.length === 0 ) {
      this.router.navigate(['register']);

      return false;
    } else {
      return true;
    }
  } 

 


 
  
}