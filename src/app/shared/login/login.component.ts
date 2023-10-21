import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoginModel } from '../../core/models/auth/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  displayError:boolean;
  displaySuccess:boolean;
  loginModel :LoginModel = {};

  constructor(private authService:AuthService, private router:Router){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl(
        '',
        [
          Validators.required,
          Validators.maxLength(32),
          Validators.minLength(8),
        ],
      )
    });
    this.displayError = false;
    this.displaySuccess = false;
  }
  onSubmit(){
    if (this.loginForm.valid) {
      console.log("form",this.loginForm.getRawValue())
      const email = this.loginForm.getRawValue();

      this.loginModel = {
        email: this.loginForm.value['email'],
        password: this.loginForm.value['password'],
      }

      this.authService.Login(this.loginModel)
      .subscribe({
        next:(res) => {
        console.log(res);
        this.displaySuccess = true;
        this.router.navigate(['/tasks']);

      },
      error:(error) => {
        console.log(error);
        this.displayError = true;
      }});
    }
  }
}
