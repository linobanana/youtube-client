import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort-panel',
  templateUrl: './sort-panel.component.html',
  styleUrls: ['./sort-panel.component.css']
})
export class SortPanelComponent implements OnInit {
  @Output() public dateSorting: EventEmitter<boolean> = new EventEmitter();
  @Output() public countSorting: EventEmitter<boolean> = new EventEmitter();

  public dateSortCounter: number = 0;
  public countSortCounter: number = 0;

  constructor() { }

  public ngOnInit(): void {
  }

  public dateSort($event: { preventDefault: () => void; }): void {
    $event.preventDefault();
    this.dateSortCounter++;
    this.countSortCounter = 0;
    if (this.dateSortCounter % 2 !== 0) {
      this.dateSorting.emit(true);
    } else {
      this.dateSorting.emit(false);
    }
  }

  public countSort($event: { preventDefault: () => void; }): void {
    $event.preventDefault();
    this.countSortCounter++;
    this.dateSortCounter = 0;
    if (this.countSortCounter % 2 !== 0) {
      this.countSorting.emit(true);
    } else {
      this.countSorting.emit(false);
    }
  }
}
