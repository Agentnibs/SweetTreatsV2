import { Component, OnInit } from '@angular/core';
import { SweettreatsService } from '../sweettreats.service';
import { OrderMenuPageComponent } from '../order-menu-page/order-menu-page.component';
import {MatBadgeModule} from '@angular/material/badge';
import {CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-header-toolbar',
  templateUrl: './header-toolbar.component.html',
  styleUrls: ['./header-toolbar.component.scss']
})
export class HeaderToolbarComponent implements OnInit {
  //public cart:OrderMenuPageComponent 
  constructor(public data: SweettreatsService,
    public cart: CartserviceService){}

  ngOnInit() {
  }


  logout(){
    console.log("clicked logout")
    this.data.activeUser = null;
    window.location.reload();
  }

}
