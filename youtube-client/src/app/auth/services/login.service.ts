import { UserData } from './../models/form-data.model';
import { Injectable, Output } from '@angular/core';

@Injectable()
export class LoginService {
  public error: boolean = false;

  constructor() { }

  private setAccessToken(access: boolean): void {
    if (access) {
      localStorage.setItem('accessToken', 'user-token');
    }
  }

  private getAccessToken(): string {
    return localStorage.getItem('accessToken');
  }

  public logOut(): void {
    localStorage.removeItem('accessToken');
  }

  public checkUser(formValue: UserData): void {
    if (formValue.username && formValue.password) {
      this.error = false;
      this.setAccessToken(true);
    } else {
      this.error = true;
    }
  }
}
