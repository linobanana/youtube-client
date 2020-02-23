import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public showResults: EventEmitter<boolean> = new EventEmitter();
  @Output() public showPanel: EventEmitter<boolean> = new EventEmitter();

  public isSortPanelActive: boolean = false;

  constructor() { }

  public ngOnInit(): void {
  }

  public onSubmit(action: boolean): void {
    this.showResults.emit(action);
  }

  public activateSortPanel(): void {
    this.isSortPanelActive ? this.isSortPanelActive = false : this.isSortPanelActive = true;
    if (this.isSortPanelActive) {
      this.showPanel.emit(true);
    } else {
      this.showPanel.emit(false);
    }
  }

}
