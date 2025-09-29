import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ToastService } from '../services/toast.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastr = inject(ToastrService);
  const toast = inject(ToastService);
  const router = inject(Router);
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      // toastr.error(
      //   error.error?.message || 'Unexpected error',
      //   `Error ${error.status}`
      // );
      toast.showError(
        error.error?.message || 'Unexpected error'
      );
      if (error.status === 401) {
        router.navigate(['/auth/login']);
      }

      return throwError(() => error);
    })
  );
};