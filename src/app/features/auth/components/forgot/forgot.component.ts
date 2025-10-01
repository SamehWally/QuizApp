import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ILoginResponse } from '../../interfaces/login';
import { ToastService } from '../../../../core/services/toast.service';
import { MyTranslateService } from '../../../../core/services/my-translate.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-forgot',
  standalone: false,
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.scss',
})
export class ForgotComponent {
  iconStyle: string = 'password-icon-ltr';
  lang: string = 'en';

  forgotForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
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
  }

  SubmitForm(data: FormGroup) {
    console.log(data.value);

    this._auth.forgot(data.value).subscribe({
      next: (res: any) => {
        this._toast.showSuccess('success');
      },
      complete: () => {
        this.router.navigate(['/auth/reset']);
      },
    });
  }
}
