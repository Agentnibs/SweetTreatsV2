import { Component, OnInit } from '@angular/core';
import {FormBuilder ,FormControl, FormGroup,Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { registerInfo } from './registerInfo';
import { SweettreatsService } from '../sweettreats.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
 
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;
  success: string;

  email = new FormControl('', [Validators.required, Validators.email]);
  registerInfo = new registerInfo('','','','','','','','','','','');
  
  constructor(
    private data: SweettreatsService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog) { 
    
  }

  ngOnInit() {
    // this.registerForm = this.formBuilder.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required],
    //   email: ['', Validators.required],
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   address1: ['', Validators.required],
    //   address2: ['', Validators.required],
    //   city: ['', Validators.required],
    //   state: ['', Validators.required],
    //   postalCode: ['', Validators.required]      

    // });
  }
 
  get f() { return this.registerForm.controls; }

  getCurrentModel() { 
    return JSON.stringify(this.registerInfo); 
  }

  
  openDialog(): void {
    const dialogRef = this.dialog.open(SignupConfirmationDialogComponent, {
      width: '600px',
      //data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }


  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' : '';
  }

  register(registerForm){
    console.log("register clicked");
    console.log(this.registerInfo);
    this.error = '';
    this.success = '';
    this.openDialog();

    this.data.register(this.registerInfo).subscribe(
      (res: registerInfo[]) => {
        this.registerInfo = res;

        this.success = "created succesfully";

        //registerForm.reset();
      }
    )
    

    //this.data.


  }


}


@Component({
  selector: 'signup-confirmation-dialog',
  templateUrl: 'signup-confirmation-dialog.html',
})
export class SignupConfirmationDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SignupConfirmationDialogComponent>,
    private router: Router
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigate([`./login`]); 
  }
}