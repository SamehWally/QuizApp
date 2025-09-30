import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class MyTranslateService {
  private readonly translateService = inject(TranslateService);
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('lang') || 'en';

      this.translateService.setFallbackLang('en');

      this.translateService.use(savedLang);

      this.setDirection(savedLang);
    }
  }
  private setDirection(lang: string) {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

  changeLanguage(lang: string = 'en'): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);

      this.translateService.use(lang);

      this.setDirection(lang);
    }
  }

  getCurrentLanguage(): string {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('lang') || 'en';
    }
    return 'en';
  }
}
