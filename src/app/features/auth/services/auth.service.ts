import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginReq, ILoginResponse } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }
  login(data:ILoginReq):Observable<ILoginResponse>
  {
    return this._http.post<ILoginResponse>('auth/login',data);
  }
}
