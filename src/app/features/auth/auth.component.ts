import { Component, inject } from '@angular/core';
import { MyTranslateService } from '../../core/services/my-translate.service';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  private readonly _MyTranslateService = inject(MyTranslateService);
  language: string = this.getLanguage();
  authLogoStyle = 'auth-logo-ltr';
  changeLanguage() {
    if (this.language == 'En') {
      this.language = 'Ar';
      this._MyTranslateService.changeLanguage('ar');
      this.authLogoStyle = 'auth-logo-rtl';
    } else {
      this.language = 'En';
      this.authLogoStyle = 'auth-logo-ltr';
      this._MyTranslateService.changeLanguage('en');
    }
  }
  getLanguage(): string {
    return localStorage.getItem('lang') ?? 'en';
  }
  ngOnInit(): void {
    this._MyTranslateService.getCurrentLanguage();
    if (this._MyTranslateService.getCurrentLanguage() == 'ar') {
      this.authLogoStyle = 'auth-logo-rtl';
      this.language = 'Ar';
    } else {
      this.language = 'En';
      this.authLogoStyle = 'auth-logo-ltr';
    }
  }
}
