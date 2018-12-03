import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { LoginPageComponent } from './login-page/login-page.component';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
import { user } from './login-page/user';

@Injectable({
  providedIn: 'root'
})
export class SweettreatsService {

baseUrl = "http://jcaldera19.satx-scholars.com/api";
cars: string[];

  constructor(private http: HttpClient) { }


getUsers(){
  return this.http.get('https://reqres.in/api/users')
}

login(userInfo: user): Observable<user[]>{
  return this.http.post(`${this.baseUrl}/login`, {data:userInfo})
  .pipe(map((res) => {
    this.cars.push(res['data']);
    return this.cars;
  }),
  catchError(this.handleError));

}


private handleError(error: HttpErrorResponse) {
  console.log(error);
 
  // return an observable with a user friendly message
  return throwError('Error! something went wrong.');
}

}



