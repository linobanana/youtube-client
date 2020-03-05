import { YoutubeService } from './../../../youtube/services/youtube.service';
import { LoginService } from 'src/app/auth/services/login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private _router: Router,
    public loginService: LoginService,
    private _youtubeService: YoutubeService
  ) { }

  public goHome(): void {
    this._router.navigateByUrl('/home');
  }

  public logOut(): void {
    this.loginService.logOut();
  }

  public onSubmit(): void {
    if (this._router.url !== '/auth') {
      this._youtubeService.showResults();
    }
  }

  public activateSortPanel(): void {
    if (this._router.url !== '/auth') {
      this._youtubeService.toggleSortPanelState();
    }
  }
}
