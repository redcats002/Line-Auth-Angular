import { Component } from '@angular/core';

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

  onSubmit() {
    console.log(this.registrationData);
    // You can process the form data here (e.g., send it to your backend)
  }
}
