import { SharedModule } from './../../../../../Shared/shared.module';
import { Component, inject } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MyTranslateService } from '../../../../../core/services/my-translate.service';

@Component({
  selector: 'app-navbar-instructor',
  templateUrl: './navbar-instructor.component.html',
  styleUrl: './navbar-instructor.component.scss',
  imports: [SharedModule],
})
export class NavbarInstructorComponent {
  //#region Properties
  language: string = 'En';
  //#endregion Properties

  //#region Services
  private _MyTranslateService = inject(MyTranslateService);
  //#endregion Services

  //#region Methods
  getUserName(): string {
    return localStorage.getItem('name') ?? '';
  }
  getUserRole(): string {
    return localStorage.getItem('role') ?? '';
  }

  changeLanguage() {
    if (this.language == 'En') {
      this.language = 'Ar';
      this._MyTranslateService.changeLanguage('ar');
    } else {
      this.language = 'En';
      this._MyTranslateService.changeLanguage('en');
    }
  }
  logOut(): void {
    localStorage.clear();
    window.location.href = '/auth/login';
  }
  //#endregion Methods
}
