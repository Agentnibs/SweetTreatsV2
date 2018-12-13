import { Injectable } from '@angular/core';
import { SweettreatsService } from './sweettreats.service';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {


cartCounter: number = 0;

  constructor(private data: SweettreatsService) { 
  }

  getCartNum() {
    this.data.getCartSimple(this.data.activeUserID).subscribe(data =>{
      console.log("DataCart " + data.itemsCount)
      this.cartCounter = parseInt (data.itemsCount);
      delay(1000)
    });


    //console.log("Count" + this.cartCounter);
   
    //return this.cartCounter;
  }

  incrementCart(){
    this.cartCounter++;
  }

}

async function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) )};
