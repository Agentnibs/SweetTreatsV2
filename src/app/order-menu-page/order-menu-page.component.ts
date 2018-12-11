import { Component, OnInit } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import { CartserviceService } from '../cartservice.service';
import { SweettreatsService } from '../sweettreats.service';
import {OrderDetails} from './OrderDetails';
import { registerInfo } from '../signup-page/registerInfo';

@Component({
  selector: 'app-order-menu-page',
  templateUrl: './order-menu-page.component.html',
  styleUrls: ['./order-menu-page.component.scss']
})
export class OrderMenuPageComponent implements OnInit {

//cartCounter = 0;

orderdetails = new OrderDetails(null,null,null);
success: string;


  constructor(private cart: CartserviceService,
    public data: SweettreatsService) { }

  ngOnInit() {
    
  }



  AddToCart(userID, productID){
    this.cart.incrementCart();
    console.log("UserID: " + userID);
    console.log("ProductID: " + productID); 
    this.orderdetails["userID"] = userID;
    this.orderdetails["productID"] = productID;
    console.log(this.orderdetails);


    if (this.orderdetails["chocolateChipQty"] != null){
      this.orderdetails["qty"] = this.orderdetails["chocolateChipQty"];
    }

    console.log(this.orderdetails);

    if (this.orderdetails["snickerdoodleQty"] != null){
      this.orderdetails["qty"] = this.orderdetails["snickerdoodleQty"];
    }
    
    if (this.orderdetails["peanutbutterQty"] != null){
      this.orderdetails["qty"] = this.orderdetails["peanutbutterQty"];
    }
    
    if (this.orderdetails["mmCookieQty"] != null){
      this.orderdetails["qty"] = this.orderdetails["mmCookieQty"];
    }
 
    if (this.orderdetails["oatmealRaisinQty"] != null){
      this.orderdetails["qty"] = this.orderdetails["oatmealRaisinQty"];
    }

    if (this.orderdetails["sugarQty"] != null){
      this.orderdetails["qty"] = this.orderdetails["sugarQty"];
    }

    if (this.orderdetails["pecanChipQty"] != null){
      this.orderdetails["qty"] = this.orderdetails["pecanChipQty"];
    }

    if (this.orderdetails["mintChocoQty"] != null){
      this.orderdetails["qty"] = this.orderdetails["mintChocoQty"];
    }
    console.log(this.orderdetails);

    this.data.updateCart(this.orderdetails).subscribe(
      (res: OrderDetails[]) => {
        this.orderdetails = res;
        this.success = "it worked?";
      }
    )

    this.orderdetails = new OrderDetails(null,null,null)

    //this.cartCounter = this.cartCounter + 1;
  }


}
