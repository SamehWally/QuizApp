import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import { ToastService } from '../../../../core/services/toast.service';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-reset',
  standalone: false,
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.scss'
})
export class ResetComponent  {
  iconStyle:string='password-icon-ltr';
  PasswordPattern: RegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{1,10}$/;
  passwordError: string =
    'Password must contain uppercase, lowercase, number, symbol (max 10 chars)';
  resetForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(this.PasswordPattern),
    ]),
    otp:new FormControl (null,[Validators.required])
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
    this._auth.reset(data.value).subscribe({
      next: (res) => {
       console.log(res);



      },
      complete:()=>{
         this._toast.showSuccess('login success');
      }
    });
  }
}
