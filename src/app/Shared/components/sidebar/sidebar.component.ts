import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: false,
})
export class SidebarComponent {
  controlDirection(): string {
    return localStorage.getItem('lang') === 'ar' ? 'rtl' : 'ltr';
  }
  isStudent(): boolean {
    return localStorage.getItem('role') === 'Student' ? true : false;
  }
  isInstructor(): boolean {
    return localStorage.getItem('role') === 'Instructor' ? true : false;
  }
  menu: any[] = [
    {
      title: 'dashboard.Dashboard',
      icon: 'fa-grip',
      menuLink: '/dashboard/instructor/homeInstructor',
      isActive: this.isInstructor(),
    },
    {
      title: 'dashboard.students',
      icon: 'fa-graduation-cap',
      menuLink: '/dashboard/instructor/student',
      isActive: this.isInstructor(),
    },
    {
      title: 'dashboard.Groups',
      icon: 'fa-user-group',
      menuLink: '/dashboard/instructor/groups',
      isActive: this.isInstructor(),
    },
    {
      title: 'dashboard.Quizzes',
      icon: 'fa-clock',
      menuLink: '/dashboard/instructor/quizzes',
      isActive: this.isInstructor(),
    },
    {
      title: 'dashboard.Results',
      icon: ' fa-square-poll-vertical',
      menuLink: '/dashboard/instructor/results',
      isActive: this.isInstructor(),
    },
  ];
}
