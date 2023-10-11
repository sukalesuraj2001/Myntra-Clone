import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
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

  ngOnInit(): void {}

  //  for register user
  namectrl = new FormControl('');
  registrationSuccess = false;
  loginSuccess = false;
  loginAttempt = false;

  // custom validations for email start

  emailContainsAt(control: AbstractControl): ValidationErrors | null {
    const email = control.value as string | null;
    //allows null value

    //check email is null or undefined or not contains the sign
    if (email === null || email === undefined || email.indexOf('@') === -1) {
      return { emailDoesNotContainAt: true };
    }

    return null;
  }
  // custom email validation end

  // custom password validation start

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.value as string;

    if (!password) {
      return null;
    }

    // for  Check for at least one uppercase character
    if (!/[A-Z]/.test(password)) {
      return { missingUppercase: true };
    }
    //for checking atkeast one special symbol
    if (!/[!@#$%^&*]/.test(password)) {
      return { missingSpecialCharacter: true };
    }

    return null;
  }
  // custom password validation end

  // formGroup

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      this.emailContainsAt,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      this.passwordValidator,
    ]),
  });

  formsubmit(userData: any): void {
    this.auth.userRegister(userData).subscribe((result) => {
      this.registrationSuccess = true;
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    });
  }

  get user() {
    return this.profileForm.get('user');
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

    this.auth.userLogin(userData).subscribe((responseData: any) => {
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
            localStorage.setItem(
              'userName',
              element.firstName + ' ' + element.lastName
            );
          }
        });

      if (count > 0) {
        this.loginSuccess = true;
        localStorage.setItem(
          'token',
          this.loginForm.value.email + ' ' + this.loginForm.value.password
        );
        // this.auth.getProfile().subscribe((res)=>{
        //   const data=JSON.stringify(res)
        //   console.log("data "+data);
        //   sessionStorage.setItem("profileData", data);
        //  })

        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);
        // setTimeout(() => {
        //   window.location.reload();
        // }, 2000);
      } else {
        this.loginSuccess = false;
      }
      // window.location.reload();
      this.loginAttempt = true;
    });
  }
}
