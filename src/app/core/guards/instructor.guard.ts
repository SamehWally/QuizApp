import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const InstructorGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router);
  if (
    localStorage.getItem('userToken') !== null &&
    localStorage.getItem('role') === 'Instructor'
  ) {
    return true;
  }
  _Router.navigate(['/auth']);
  return false;
};
