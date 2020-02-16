import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public sortActive: boolean = false;
  public hasResponse: boolean = false;

  public showResults(): void {
    this.hasResponse = true;
  }

  public showPanel(isActive: boolean): void {
    isActive ? this.sortActive = true : this.sortActive = false;
  }
}
