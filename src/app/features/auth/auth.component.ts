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
  language: string = 'En';
  changeLanguage() {
    if (this.language == 'En') {
      this.language = 'Ar';
      this._MyTranslateService.changeLanguage('ar');
    } else {
      this.language = 'En';
      this._MyTranslateService.changeLanguage('en');
    }
  }
}
