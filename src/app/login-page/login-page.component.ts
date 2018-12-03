import { Component, OnInit } from '@angular/core';
import { SweettreatsService } from '../sweettreats.service';
import { Observable } from 'rxjs';
import { user } from './user';

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

  userInfo = new user('','');

  constructor(private data: SweettreatsService) { }

  ngOnInit() {
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
        this.userInfo = res;

        // Inform the user
        this.success = 'Created successfully';

        // Reset the form
        loginForm.reset();
      },
      (err) => this.error = err
    );
}


  // login(){
  //   this.error = '';
  //   this.success = '';
  //   this.data.login().subscribe(
  //     this.success = "login success");
    

    
  //   console.log("Login button clicked");
  // }


}
