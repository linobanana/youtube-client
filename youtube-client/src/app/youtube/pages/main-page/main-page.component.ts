import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';
import { youtubeResponse } from 'src/app/shared/mocks/youtube-response';

const videos: Array<SearchItem> = youtubeResponse.items;

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  @Input() public dateSort: boolean;
  @Input() public countSort: boolean;
  @Input() public searchText: string;

  public videos: SearchItem[];

  constructor() { }

  public ngOnInit(): void {
    this.videos = videos;
  }

}
