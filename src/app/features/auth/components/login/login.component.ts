import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ILoginResponse } from '../../interfaces/login';
import { ToastService } from '../../../../core/services/toast.service';
import { MyTranslateService } from '../../../../core/services/my-translate.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  iconStyle: string = 'password-icon-ltr';
  lang: string = 'en';
  role:string='';
  PasswordPattern: RegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{1,10}$/;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(this.PasswordPattern),
    ]),
  });
  constructor(
    private _auth: AuthService,
    private _toast: ToastService,
    private router: Router,
    private translate: TranslateService
  ) {}
  ngOnInit(): void {
    this.translate.onLangChange.subscribe((event: any) => {
      if (event.lang == 'ar') {
        this.iconStyle = 'password-icon-rtl';
        this.lang = 'ar';
      } else {
        this.iconStyle = 'password-icon-ltr';
        this.lang = 'en';
      }
    });
    if (localStorage.getItem('lang') == 'ar') {
      this.lang = 'ar';
      this.iconStyle = 'password-icon-rtl';
    } else {
      this.lang = 'en';
      this.iconStyle = 'password-icon-ltr';
    }
  }
  SubmitForm(data: FormGroup) {
    this._auth.login(data.value).subscribe({
      next: (res: ILoginResponse) => {
        this._toast.showSuccess('login success');
        localStorage.setItem('userToken', res.data.accessToken);
        localStorage.setItem('refreshToken', res.data.refreshToken);
        localStorage.setItem('_id', res.data.profile._id);
        localStorage.setItem(
          'name',
          res.data.profile.first_name + ` ` + res.data.profile.last_name
        );
        localStorage.setItem('email', res.data.profile.email);
        localStorage.setItem('role', res.data.profile.role);
        this.role=res.data.profile.role
      },
      complete: () => {
        if(this.role == 'Student'){
          this.router.navigate(['/dashboard/student']);
        }else{
          this.router.navigate(['/dashboard']);
        }
      },
    });
  }
}
