import { LoginService } from './../../services/login.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserData } from '../../models/form-data.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../../../shared/components/snack-bar/snack-bar.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  public form: FormGroup;
  public errorMessage: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private _snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  private showSnackBar(): void {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 1000,
      data: 'You have succesfully logged in.'
    });
  }

  private hideError(): void {
    this.errorMessage = false;
  }

  public submit(formValue: UserData): void {
    this.hideError();
    if (this.form.valid) {
      this.loginService.checkUser(formValue);
      if (!this.loginService.error) {
        this.showSnackBar();
        this.form.reset();
      } else {
        this.errorMessage = true;
      }
    }
  }
}
