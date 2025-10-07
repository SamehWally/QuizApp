import { Component, inject, OnInit } from '@angular/core';
import { MyTranslateService } from '../../core/services/my-translate.service';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  private readonly _MyTranslateService = inject(MyTranslateService);
  language: string = localStorage.getItem('lang') || 'en';
  authLogoStyle = 'auth-logo-ltr';

  ngOnInit(): void {
    this._MyTranslateService.changeLanguage(this.language);
    this.updateDirection();
  }

  changeLanguage(): void {
    this.language = this.language === 'en' ? 'ar' : 'en';
    localStorage.setItem('lang', this.language);
    this._MyTranslateService.changeLanguage(this.language);
    this.updateDirection();
  }

  get displayLanguage(): string {
    return this.language === 'en' ? 'AR' : 'EN';
  }

  private updateDirection(): void {
    const isArabic = this.language === 'ar';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    this.authLogoStyle = isArabic ? 'auth-logo-rtl' : 'auth-logo-ltr';
  }
}
