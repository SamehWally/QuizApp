import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ITopFive } from '../interfaces/ITopFive';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InstructorService {
  private readonly _HttpClient = inject(HttpClient);

  getTopFiveStudents(): Observable<ITopFive[]> {
    return this._HttpClient.get<ITopFive[]>('student/top-five');
  }
  upcomingFiveQuizzes(): Observable<any[]> {
    return this._HttpClient.get<any[]>('quiz/incomming');
  }
}
