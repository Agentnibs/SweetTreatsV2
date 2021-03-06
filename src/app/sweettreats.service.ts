import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { LoginPageComponent } from './login-page/login-page.component';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
import { user } from './login-page/user';
import { registerInfo } from './signup-page/registerInfo';
import { JsonPipe } from '@angular/common';
import {OrderDetails} from './order-menu-page/OrderDetails'
import { TenderInfo } from './cart-page/TenderInfo';


@Injectable({
  providedIn: 'root'
})
export class SweettreatsService {

baseUrl = "http://jcaldera19.satx-scholars.com/api";
cars: string[];
activeUser: string;
activeUserID: number;

private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn')|| 'false')

  constructor(private http: HttpClient) { }


  setLoggedIn(value: boolean){
    this.loggedInStatus = value
    localStorage.setItem('loggenIn', 'true')
  }

  get isLoggedIn(){
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString())
  }


getUsers(){
  return this.http.get('https://reqres.in/api/users')
}
//login(userInfo: user){
//login(userInfo: user): Observable<user[]>{
login(userInfo: user){
  
  var x =  this.http.post(`${this.baseUrl}/login.php`, {data:userInfo})
  return x;
  
  // .pipe(map((res) => {
  //   this.cars.push(res['data']);
  //   return this.cars;
  // }),
 
  
  // catchError(this.handleError));

}


register(registerInfo: registerInfo): Observable<registerInfo[]>{
  return this.http.post(`${this.baseUrl}/register.php`, {data:registerInfo})
  .pipe(map((res) => {
    this.cars.push(res['data']);
    return this.cars;
  }),
  catchError(this.handleError));

}


updateCart(orderDetails: OrderDetails): Observable<OrderDetails[]>{
  return this.http.post(`${this.baseUrl}/UpdateCart.php`, {data:orderDetails})
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


getCartSimple(id:number): Observable<cartItems> {
  console.log("ID:" + id);
   const requestUrl =
   `${this.baseUrl}/GetCart.php?userid=${id}`;
 
   return this.http.get<any>(requestUrl);
 }


getCartItems(id:number, sort: string, order: string, page: number): Observable<any> {
 console.log("ID:" + id);
  const requestUrl =
  `${this.baseUrl}/GetCart.php?userid=${id}`;

  return this.http.get<any>(requestUrl);
}


tenderCart(tenderInfo: TenderInfo): Observable<TenderInfo[]>{

  return this.http.post(`${this.baseUrl}/TenderCart.php`,{data:tenderInfo})
  .pipe(map((res) => {
    this.cars.push(res['data']);
    return this.cars;
  }),
  catchError(this.handleError));
}



}

export interface CartApi {
  items: cartItems[];
  //total_count: number;
}

export interface cartItems {
  itemNumber: string;
  description: string;
  price: string;
  qty: string;
  extendedPrice: string;
  itemsCount: string;
}

