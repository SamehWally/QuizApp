import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { inject, PLATFORM_ID } from '@angular/core';
import { environment } from '../environment/environment';
import { isPlatformBrowser } from '@angular/common';

export const globalInterceptor: HttpInterceptorFn = (req, next) => {
  const id = inject(PLATFORM_ID);
  const spinner = inject(NgxSpinnerService);

  let userToken = '';
  let lang = 'en';

  if (isPlatformBrowser(id)) {
    userToken = localStorage.getItem('userToken') || '';
    lang = localStorage.getItem('lang') || 'en';
  }

  spinner.show();

  if (req.url.includes('/assets/')) {
    return next(req).pipe(finalize(() => spinner.hide()));
  }

  const myReq = req.clone({
    url: environment.ServerUrl + req.url,
    setHeaders: {
      Authorization: userToken ? `Bearer ${userToken}` : '',
      language: lang,
    },
  });

  return next(myReq).pipe(finalize(() => spinner.hide()));
};
