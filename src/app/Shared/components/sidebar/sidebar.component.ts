import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: false,
})
export class SidebarComponent {
  isStudent(): boolean {
    return localStorage.getItem('role') === 'Student' ? true : false;
  }
  isInstructor(): boolean {
    return localStorage.getItem('role') === 'Instructor' ? true : false;
  }
  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'fa-grip',
      menuLink: '/dashboard/instructor/homeInstructor',
      isActive: this.isInstructor(),
    },
    {
      title: 'Groups',
      icon: 'fa-user-group',
      menuLink: '/dashboard/instructor/groups',
      isActive: this.isInstructor(),
    },
    {
      title: 'Quizzes',
      icon: 'fa-clock',
      menuLink: '/dashboard/instructor/quizzes',
      isActive: this.isInstructor(),
    },
    {
      title: 'Results',
      icon: ' fa-square-poll-vertical',
      menuLink: '/dashboard/instructor/results',
      isActive: this.isInstructor(),
    },
  ];
}
