import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-navbar-instructor',
  templateUrl: './navbar-instructor.component.html',
  styleUrl: './navbar-instructor.component.scss',
})
export class NavbarInstructorComponent {
  controlDirection(): string {
    return localStorage.getItem('lang') === 'ar' ? 'rtl' : 'ltr';
  }
}
