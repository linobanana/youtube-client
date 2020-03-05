import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  public canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loginService.getAccessToken() === 'user-token') {
      this.loginService.isAuthorized = true;
      return Promise.resolve(true);
    } else {
      this.router.navigateByUrl('/auth');
    }
  }
}
