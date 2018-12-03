import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-main-page-extras',
  templateUrl: './main-page-extras.component.html',
  styleUrls: ['./main-page-extras.component.scss']
})
export class MainPageExtrasComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  constructor() { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
