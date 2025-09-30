import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const StudentGuard: CanActivateFn = (route, state) => {
  const _Router = inject(Router);
  if (
    localStorage.getItem('userToken') !== null &&
    localStorage.getItem('role') === 'Student'
  ) {
    return true;
  }
  _Router.navigate(['/auth']);
  return false;
};
