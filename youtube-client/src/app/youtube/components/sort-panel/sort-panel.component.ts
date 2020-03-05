import { YoutubeService } from './../../services/youtube.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sort-panel',
  templateUrl: './sort-panel.component.html',
  styleUrls: ['./sort-panel.component.css']
})
export class SortPanelComponent implements OnInit {
  @Input() public userInput: string;

  public dateSortCounter: number = 0;
  public countSortCounter: number = 0;

  constructor(private _youtubeService: YoutubeService) { }

  public ngOnInit(): void {
  }

  public dateSort($event: MouseEvent): void {
    $event.preventDefault();
    this.dateSortCounter++;
    this.countSortCounter = 0;
    if (this.dateSortCounter % 2 !== 0) {
      this._youtubeService.dateSort = true;
    } else {
      this._youtubeService.dateSort = false;
    }
  }

  public countSort($event: MouseEvent): void {
    $event.preventDefault();
    this.countSortCounter++;
    this.dateSortCounter = 0;
    if (this.countSortCounter % 2 !== 0) {
      this._youtubeService.countSort = true;
    } else {
      this._youtubeService.countSort = false;
    }
  }

  public onSearchSubmit(): void {
    this.dateSortCounter = 0;
    this.countSortCounter = 0;
    this._youtubeService.dateSort = false;
    this._youtubeService.countSort = false;
    this._youtubeService.searchText = this.userInput;
  }

  public clearField($event: MouseEvent): void {
    this.userInput = '';
    this.dateSortCounter = 0;
    this.countSortCounter = 0;
    this._youtubeService.dateSort = false;
    this._youtubeService.countSort = false;
    this._youtubeService.searchText = this.userInput;
  }
}
