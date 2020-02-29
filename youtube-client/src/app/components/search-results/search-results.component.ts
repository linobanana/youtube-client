import { youtubeResponse } from './../../mocks/youtube-response';
import { SearchItem } from './../../models/search-item.model';
import { Component, OnInit, Input } from '@angular/core';

const videos: Array<SearchItem> = youtubeResponse.items;

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() public dateSort: boolean;
  @Input() public countSort: boolean;
  @Input() public searchText: string;

  public videos: SearchItem[];

  constructor() { }

  public ngOnInit(): void {
    this.videos = videos;
  }

}
