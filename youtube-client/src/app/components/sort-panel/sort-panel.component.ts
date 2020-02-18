import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-sort-panel',
  templateUrl: './sort-panel.component.html',
  styleUrls: ['./sort-panel.component.css']
})
export class SortPanelComponent implements OnInit {
  @Output() public dateSorting: EventEmitter<boolean> = new EventEmitter();
  @Output() public countSorting: EventEmitter<boolean> = new EventEmitter();
  @Output() public searchText: EventEmitter<string> = new EventEmitter();
  @Input() public userInput: string;

  public dateSortCounter: number = 0;
  public countSortCounter: number = 0;

  constructor() { }

  public ngOnInit(): void {
  }

  public dateSort($event: MouseEvent): void {
    $event.preventDefault();
    this.dateSortCounter++;
    this.countSortCounter = 0;
    if (this.dateSortCounter % 2 !== 0) {
      this.dateSorting.emit(true);
    } else {
      this.dateSorting.emit(false);
    }
  }

  public countSort($event: MouseEvent): void {
    $event.preventDefault();
    this.countSortCounter++;
    this.dateSortCounter = 0;
    if (this.countSortCounter % 2 !== 0) {
      this.countSorting.emit(true);
    } else {
      this.countSorting.emit(false);
    }
  }

  public onSearchSubmit(): void {
    this.dateSortCounter = 0;
    this.countSortCounter = 0;
    this.dateSorting.emit(false);
    this.countSorting.emit(false);
    this.searchText.emit(this.userInput);
  }

  public clearField($event: MouseEvent): void {
    this.userInput = '';
    this.dateSortCounter = 0;
    this.countSortCounter = 0;
    this.dateSorting.emit(false);
    this.countSorting.emit(false);
    this.searchText.emit(this.userInput);
  }
}
