import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { OrderMenuPageComponent } from './order-menu-page/order-menu-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { AuthGuard} from './auth.guard'

const routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'cart', component: CartPageComponent, canActivate:[AuthGuard]},
  { path: 'orderMenu', component: OrderMenuPageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: SignupPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
