import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public dateSort: boolean;
  public countSort: boolean;

  public sortActive: boolean = false;
  public hasResponse: boolean = false;

  public showResults(): void {
    this.hasResponse = true;
  }

  public showPanel(isActive: boolean): void {
    isActive && this.hasResponse ? this.sortActive = true : this.sortActive = false;
  }

  public dateSorting(...args: boolean[]): void {
    this.dateSort = args[0];
  }

  public countSorting(...args: boolean[]): void {
    this.countSort = args[0];
  }
}
