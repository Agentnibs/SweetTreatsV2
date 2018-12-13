import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageExtrasComponent } from './main-page-extras/main-page-extras.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterToolbarComponent } from './footer-toolbar/footer-toolbar.component';
import { OrderMenuPageComponent } from './order-menu-page/order-menu-page.component';
import { CartPageComponent, TenderConfirmationDialogComponent } from './cart-page/cart-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MemberAccountPageComponent } from './member-account-page/member-account-page.component';
import { SignupPageComponent, SignupConfirmationDialogComponent } from './signup-page/signup-page.component';
import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainPageExtrasComponent,
    FooterToolbarComponent,
    OrderMenuPageComponent,
    CartPageComponent,
    LoginPageComponent,
    MemberAccountPageComponent,
    SignupPageComponent,
    HeaderToolbarComponent,
    SignupConfirmationDialogComponent,
    TenderConfirmationDialogComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatBadgeModule
  ],
  entryComponents: [
    SignupConfirmationDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
