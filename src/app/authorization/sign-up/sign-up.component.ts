import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  firstName = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(18)]);
  lastName = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(22)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]);
  hide = true;

  constructor(private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      userFirstName: this.firstName,
      userLastName: this.lastName,
      userEmail: this.email,
      userPassword: this.password
    });
  }
  ngOnInit() {
  }

  getErrorMessage(field: FormControl): string {
    return field.hasError('required') ? 'You must enter a value' :
      field.hasError('email') ? 'Not a valid email' : '';
    // todo: add errors of length
  }

  addCustom() {
    console.log('h');
  }

}
