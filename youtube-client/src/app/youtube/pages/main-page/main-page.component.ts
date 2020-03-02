import { YoutubeService } from './../../services/youtube.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(public youtubeService: YoutubeService) { }

  public onClick(): void {
    this.youtubeService
    .searchResults(`${this.youtubeService.userInput}&pageToken=${this.youtubeService.nextPageToken}`);
  }

}
