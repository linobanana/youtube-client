import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserData } from '../../models/form-data.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  public form: FormGroup;
  public errorMessage: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _loginService: LoginService
  ) {
    this.form = this._formBuilder.group({
      username: '',
      password: ''
    });
  }

  private hideError(): void {
    this.errorMessage = false;
  }

  public submit(formValue: UserData): void {
    this.hideError();
    if (this.form.valid) {
      this._loginService.checkUser(formValue);
      if (!this._loginService.error) {
        this._loginService.showSnackBar('You have succesfully logged in.');
        this.form.reset();
      } else {
        this.errorMessage = true;
      }
    }
  }
}
