import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {


cartCounter: number = 0;

  constructor() { }


  incrementCart(){
    this.cartCounter++;
  }

}
