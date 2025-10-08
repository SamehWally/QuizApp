import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {

  constructor(private _http:HttpClient) { }
  getUpcomingQuizzes():Observable<any>{
    return this._http.get('quiz/incomming');
  }
  getCompletedQuizzes():Observable<any>{
    return this._http.get('quiz/completed');
  }
  joinQuiz(data:any):Observable<any>{
    return this._http.post('quiz/join',data);
  }
  SubmitQuiz(id:string,data:any):Observable<any>{
    return this._http.post(`quiz/submit/${id}`,data);
  }
  getQuizById(id:string):Observable<any>{
    return this._http.get(`quiz/without-answers/${id}`);
  }
  getResult():Observable<any>{
    return this._http.get(`quiz/result`);
  }
  getGroupById(id:string):Observable<any>{
    return this._http.get(`group/${id}`);
  }

}
