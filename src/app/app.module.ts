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
import { CartPageComponent } from './cart-page/cart-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MemberAccountPageComponent } from './member-account-page/member-account-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component';


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
    HeaderToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
