import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { registerInfo } from './registerInfo';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor() { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }

  register(registerForm){
    
  }


}
