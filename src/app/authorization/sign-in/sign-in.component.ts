import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.required);
  hide = true;

  constructor(private formBuilder: FormBuilder) {
    this.signInForm = this.formBuilder.group({
      userEmail: this.email,
      userPassword: this.password
    });
  }
  ngOnInit() {
  }

  getErrorMessage(field: FormControl): string {
    return field.hasError('required') ? 'You must enter a value' :
      field.hasError('email') ? 'Not a valid email' : '';
  }

  addCustom() {
    console.log('h');
  }

}
