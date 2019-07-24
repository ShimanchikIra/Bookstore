import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.scss']
})
export class RestorePasswordComponent implements OnInit {

  restorePasswordForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private formBuilder: FormBuilder) {
    this. restorePasswordForm = this.formBuilder.group({
      userEmail: this.email
    });
  }
  ngOnInit() {
    // this.customers = this.dataService.getCustoms();
  }

  getErrorMessage(field: FormControl): string {
    return field.hasError('required') ? 'You must enter a value' :
      field.hasError('email') ? 'Not a valid email' : '';
  }

  addCustom() {
    console.log('h');
  }

}
