import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ILoginResponse } from '../../interfaces/login';
import { ToastService } from '../../../../core/services/toast.service';
import { TranslateService } from '@ngx-translate/core';

interface Role {
  name: string;
}

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  iconStyle: string = 'password-icon-ltr';
  lang: string = 'en';

  roles: Role[] | undefined;

  selectedCity: Role | undefined;

  PasswordPattern: RegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{1,10}$/;

  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, Validators.required),
    last_name: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    // role: new FormControl('Student', Validators.required),
    role: new FormControl(null, Validators.required),
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
    this.roles = [{ name: 'Instructor' }, { name: 'Student' }];
    if (localStorage.getItem('lang') == 'ar') {
      this.lang = 'ar';
      this.iconStyle = 'password-icon-rtl';
    } else {
      this.lang = 'en';
      this.iconStyle = 'password-icon-ltr';
    }
  }

  SubmitForm(data: FormGroup) {
    const roleName = data.get('role')?.value.name;
    data.get('role')?.setValue(roleName);

    this._auth.register(data.value).subscribe({
      next: (res: any) => {
        this._toast.showSuccess('Register success');
      },
      complete: () => {
        this.router.navigate(['/auth/login']);
      },
    });
  }
}
