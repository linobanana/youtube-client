import { MatSnackBar } from '@angular/material/snack-bar';
import { YoutubeService } from './../../youtube/services/youtube.service';
import { UserData } from './../models/form-data.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SnackBarComponent } from 'src/app/shared/components/snack-bar/snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public error: boolean = false;
  public isAuthorized: boolean = false;

  constructor(
    private _router: Router,
    private _youtubeService: YoutubeService,
    private _snackBar: MatSnackBar
  ) {}

  private setAccessToken(access: boolean): void {
    if (access) {
      localStorage.setItem('accessToken', 'user-token');
    }
  }

  public showSnackBar(message: string): void {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 2000,
      data: message
    });
  }

  public getAccessToken(): string {
    return localStorage.getItem('accessToken');
  }

  public logOut(): void {
    localStorage.removeItem('accessToken');
    this.isAuthorized = false;
    this._youtubeService.logOut();
    this.redirectToLogin();
  }

  public redirectToHome(): void {
    this._router.navigateByUrl('/home');
  }

  public redirectToLogin(): void {
    this._router.navigateByUrl('/auth');
  }

  public checkUser(formValue: UserData): void {
    if (formValue.username && formValue.password) {
      this.error = false;
      this.isAuthorized = true;
      this.setAccessToken(true);
      this.redirectToHome();
    } else {
      this.error = true;
      this.isAuthorized = false;
    }
  }
}
