import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterModel } from 'src/app/core/models/auth/register.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  displayError:boolean;
  displaySuccess:boolean;
  registerModel: RegisterModel = {};

  constructor(private authService:AuthService){
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required]),
      password: new FormControl(
        '',
        [
          Validators.required,
          Validators.maxLength(32),
          Validators.minLength(8),
        ],
      ),
      email:new FormControl('', [Validators.required]),
    });
    this.displayError = false;
    this.displaySuccess = false;
  }
  onSubmit(){
    if (this.registerForm.valid) {
      console.log(this.registerForm.getRawValue());
      this.registerModel = {
        firstName: this.registerForm.value['firstName'],
        lastName: this.registerForm.value['lastName'],
        username: this.registerForm.value['userName'],
        email: this.registerForm.value['email'],
        password: this.registerForm.value['password'],
      }

      this.authService.register(this.registerModel)
      .subscribe({
        next:(res) => {
        console.log(res);
        this.displaySuccess = true;

      },
      error:(error) => {
        console.log(error);
        this.displayError = true;
      }}

      );
    }
  }
}

