import { SearchItemWithId } from './../../../youtube/models/search-item.model';
import { YoutubeService } from './../../../youtube/services/youtube.service';
import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent {
  @Input() public video: SearchItemWithId;

  constructor(private _youtubeService: YoutubeService, private _router: Router) { }

  public setVideoId(id: string): void {
    this._youtubeService.videoId = id;
    this._router.navigate(['video', id]);
  }

}
