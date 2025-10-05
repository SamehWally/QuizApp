import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResuitsService {

  constructor(private _HttpClient:HttpClient) { }
  resuits():Observable<any>{
    return this._HttpClient.get("question")
  }
    resuitsid(id:string):Observable<any>{
    return this._HttpClient.get(`question/${id}`)
  }
}
