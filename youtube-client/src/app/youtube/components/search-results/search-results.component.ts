import { YoutubeService } from './../../services/youtube.service';
import { SearchItem } from './../../models/search-item.model';
import { Component, OnInit, Input } from '@angular/core';

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

  constructor(private _youtubeService: YoutubeService) { }

  public ngOnInit(): void {
    this.videos = this._youtubeService.videos;
  }

}
