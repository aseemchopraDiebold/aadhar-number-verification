import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ValidAadharInterface } from './interface/validAadharInterface';

@Injectable({
  providedIn: 'root'
})
export class AadharNumberInfoFetchService {
  private _url: String = 'http://localhost:3000/aadhar/validate-aadhar/';

  constructor(private http: HttpClient) { }

  isValidAadharNumber(aadharNumber): Observable<ValidAadharInterface> {
    return this.http.get<ValidAadharInterface>(this._url + aadharNumber).pipe(
      catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }
  getUrl() {
    return this._url;
  }
}
