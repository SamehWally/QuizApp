import { SharedModule } from './../../../../../Shared/shared.module';
import { Component, inject, OnInit } from '@angular/core';
import { MyTranslateService } from '../../../../../core/services/my-translate.service';

@Component({
  selector: 'app-navbar-instructor',
  templateUrl: './navbar-instructor.component.html',
  styleUrl: './navbar-instructor.component.scss',
  imports: [SharedModule],
})
export class NavbarInstructorComponent implements OnInit {
  //#region Properties
  language: string = this.getLanguage();
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
  getLanguage(): string {
    return localStorage.getItem('lang') ?? 'en';
  }

  changeLanguage(): void {
    this.language = this.language === 'en' ? 'ar' : 'en';
    localStorage.setItem('lang', this.language);
    this._MyTranslateService.changeLanguage(this.language);
  }
  get displayLanguage(): string {
    return this.language === 'en'
      ? 'navbar_dropdown.Arabic'
      : 'navbar_dropdown.English';
  }
  logOut(): void {
    localStorage.clear();
    window.location.href = '/auth/login';
  }
  //#endregion Methods

  //#region LifeCycle Hooks
  ngOnInit(): void {
    this._MyTranslateService.changeLanguage(this.language);
  }
  //#endregion LifeCycle Hooks
}
