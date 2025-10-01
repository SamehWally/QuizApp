import { Component } from '@angular/core';
// import { Router } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {  ILoginResponse } from '../../interfaces/login';
import { ToastService } from '../../../../core/services/toast.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-change-password',
  standalone: false,
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {
  iconStyle:string='password-icon-ltr';
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
  constructor(private _auth: AuthService, private _toast: ToastService,private translate: TranslateService) {}
  ngOnInit(): void {
    this.translate.onLangChange.subscribe((event: any) => {
      console.log('اللغة اتغيرت لـ:', event.lang);
       if(event.lang=='ar'){
      this.iconStyle='password-icon-rtl'
        }else{
        this.iconStyle='password-icon-ltr'
        console.log(event.lang);
    }
    });

  }
  SubmitForm(data: FormGroup) {
    this._auth.ChangePassword(data.value).subscribe({
      next: (res) => {
       console.log(res);



      },
      complete:()=>{
         this._toast.showSuccess('login success');
      }
    });
  }
}
