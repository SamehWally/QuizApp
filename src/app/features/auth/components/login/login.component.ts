import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {  ILoginResponse } from '../../interfaces/login';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  PasswordPattern: RegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{1,10}$/;
  passwordError: string =
    'Password must contain uppercase, lowercase, number, symbol (max 10 chars)';
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(this.PasswordPattern),
    ]),
  });
  constructor(private _auth: AuthService, private _toast: ToastService,private router:Router) {}
  SubmitForm(data: FormGroup) {
    this._auth.login(data.value).subscribe({
      next: (res: ILoginResponse) => {
        this._toast.showSuccess('login success');
        localStorage.setItem('token',res.data.accessToken);

        localStorage.setItem("refreshToken", res.data.refreshToken);
        localStorage.setItem('role',res.data.profile.role);


      },
      complete:()=>{
        this.router.navigate(['/dashboard'])
      }
    });
  }
}
