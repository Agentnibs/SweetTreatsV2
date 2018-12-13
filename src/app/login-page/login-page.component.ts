import { Component, OnInit } from '@angular/core';
import { SweettreatsService } from '../sweettreats.service';
import { Observable } from 'rxjs';
import { user } from './user';
import { Router } from '@angular/router';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  username: string;
  password: string;
  error: string;
  success: string;
  hide = true;

  userInfo = new user('','',null);

  constructor(private data: SweettreatsService, private router: Router, private cart: CartserviceService) { }

  ngOnInit() {
    this.userInfo = new user('','',null);
  }

  getCurrentModel() { 
    return JSON.stringify(this.userInfo); 
  }


login(loginForm){
  console.log("Login Clicked");
  console.log(this.userInfo)
  this.error = '';
    this.success = '';

    this.data.login(this.userInfo).subscribe(
      (res: user[]) => {
        // Update the list of cars
        console.log("Res" + res);
        this.userInfo = res;
        console.log(this.userInfo);
        console.log(this.userInfo["Username"]);
        console.log(this.userInfo["UserID"]);
        console.log("xxxx" + this.userInfo);
        delay(1000);

            // Inform the user
  if (this.userInfo["Username"] != null){

    if(this.userInfo["Username"] == "Unknown"){
      window.alert("User Not Found");
      loginForm.reset();
      this.userInfo = new user('','',null);
    
    }
    else{
      console.log('Logged in successfully')
      //redirect
      this.router.navigate([''])
      this.data.setLoggedIn(true);
      this.data.activeUser = this.userInfo["Username"];
      this.data.activeUserID = this.userInfo["UserID"];
    }
    

  } 

  // else{
  //   window.alert("User Not Found");
  //   loginForm.reset();
  //   this.userInfo = new user('','',null);
  
  // }

},
      (err) => this.error = err
    )
    
    

    //this.cart.getCartNum();
    
   
  }


  hello(){
    
  }

  // login(){
  //   this.error = '';
  //   this.success = '';
  //   this.data.login().subscribe(
  //     this.success = "login success");
    

    
  //   console.log("Login button clicked");
  // }


}

 async function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}