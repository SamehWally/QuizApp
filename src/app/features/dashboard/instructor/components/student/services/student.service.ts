import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from '../interfaces/IStudent';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private readonly _HttpClient = inject(HttpClient);
  getStudents(): Observable<IStudent[]> {
    return this._HttpClient.get<IStudent[]>('student');
  }
}
