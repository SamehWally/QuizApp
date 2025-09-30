import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {  ILoginResponse } from '../../interfaces/login';
import { ToastService } from '../../../../core/services/toast.service';
@Component({
  selector: 'app-change-password',
  standalone: false,
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {
  PasswordPattern: RegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{1,10}$/;
  passwordError: string =
    'Password must contain uppercase, lowercase, number, symbol (max 10 chars)';
  loginForm: FormGroup = new FormGroup({
    password_new: new FormControl(null, [Validators.required, Validators.pattern(this.PasswordPattern) ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(this.PasswordPattern),
    ]),
  });
  constructor(private _auth: AuthService, private _toast: ToastService,private router:Router) {}
  SubmitForm(data: FormGroup) {
    this._auth.ChangePassword(data.value).subscribe({
      next: (res) => {
       console.log(res);
       
        

      },
      complete:()=>{
         this._toast.showSuccess('login success');
        this.router.navigate(['/auth'])
      }
    });
  }
}

