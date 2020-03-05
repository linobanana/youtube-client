import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

  constructor(private _router: Router) { }

  public goHome(): void {
    this._router.navigateByUrl('/home');
  }
}
