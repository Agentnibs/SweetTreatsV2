import { Component, OnInit, ViewChild } from '@angular/core';
import { SweettreatsService, cartItems } from '../sweettreats.service';
import {MatPaginator, MatSort, MatDialogRef, MatDialog} from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { TenderInfo } from './TenderInfo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  displayedColumns: string[] = ['itemNumber', 'description', 'qty', 'price', 'extendedPrice']; //, 'extendedPrice'
  exampleDatabase: SweettreatsService | null;
  data: cartItems[] = [];
  tenderInfo = new TenderInfo(null,null);

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog,
    private router: Router,
     private datax: SweettreatsService,
      private http: HttpClient) {}

  ngOnInit() {
    this.exampleDatabase = new SweettreatsService(this.http);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.exampleDatabase!.getCartItems(
            this.datax.activeUserID,this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          //this.resultsLength = 1;

          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.data = data);
  }


  getTotalCost() {
    return this.data.map(t => t.extendedPrice).reduce((acc, value) => +acc + +value, 0);
  }


  TenderCart(){
    //this.cart.incrementCart();
    var amountTendered = this.getTotalCost()
    console.log("Total: " + amountTendered);

    this.tenderInfo["AmountTendered"] = amountTendered;
    this.tenderInfo["UserID"] = this.datax.activeUserID;
    

    console.log("TenderInfo: " + this.tenderInfo);

    this.datax.tenderCart(this.tenderInfo).subscribe()
      
    //Tell the user that it's tendered 
    this.openDialog();

    //Takes User Back to Home Page
    //this.router.navigate([''])
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(TenderConfirmationDialogComponent, {
      width: '600px',
      //data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }


}


@Component({
  selector: 'tender-confirmation-dialog',
  templateUrl: 'tender-confirmation-dialog.html',
})
export class TenderConfirmationDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<TenderConfirmationDialogComponent>,
    private router: Router
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigate([''])
  }

 getRandomInvoice(): number{
   return Math.floor(Math.random() * Math.floor(500000));
 }

}