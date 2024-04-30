import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registrationData = {
    phoneNumber: '',
    firstName: '',
    lastName: '',
    gender: '',
    birthDate: '',
  };

  onSubmit(form: NgForm) {
    if (form.invalid) return;
    const values = form.value;
    console.log(values);
    // this.registrationData = {
    //   phoneNumber
    // };
    // console.log(regsiterData);
  }
}
