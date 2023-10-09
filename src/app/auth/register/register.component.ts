import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthGuard } from 'src/app/guards/auth-guard.guard';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  isUserLogginIn = new BehaviorSubject<boolean>(false);

  constructor(
    private auth: AuthService,
    private guard: AuthGuard,
    private router: Router
  ) {}

ngOnInit(): void {

  
}






  //  for register user
  namectrl = new FormControl('');

  // formGroup

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  formsubmit(userData: any): void {
    this.auth.userRegister(userData).subscribe((result) => {
      alert('user register successfully');
      // this.isUserLogginIn.next(true)
    });
  }
// register section end
  showLoginForm = true;

  // login section start

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  onLoginSubmit(userData: any) {
    console.log(this.loginForm.value);
    console.log(this.loginForm.value.email);
    console.log(this.loginForm.value.password);

    this.auth.userLogin(userData)
    .subscribe((responseData: any) => {
    
      let count = 0;

      responseData &&
        responseData.forEach((element: any) => {
          console.log(element.email);
          console.log(element.id);
          if (
            element.email === this.loginForm.value.email &&
            element.password === this.loginForm.value.password
          ) {
            count++;
            localStorage.setItem('userId', element.id);
            localStorage.setItem('userName', element.firstName+" "+element.lastName);

            
          }
        });

      if (count > 0) {
        alert('User Login Successfully');
        localStorage.setItem(
          'token',
          this.loginForm.value.email + ' ' + this.loginForm.value.password
        );
        // this.auth.getProfile().subscribe((res)=>{
        //   const data=JSON.stringify(res)
        //   console.log("data "+data);
        //   sessionStorage.setItem("profileData", data);
        //  })




        this.router.navigate(['/']);
        setTimeout(() => {
          window.location.reload()
        }, 100);
      } else {
        alert('invalid email and password');
      }
      // window.location.reload();
    });
  }
}
