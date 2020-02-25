import { Injectable } from '@angular/core';
import { youtubeResponse } from 'src/app/shared/mocks/youtube-response';
import { SearchItem } from '../models/search-item.model';

const videos: Array<SearchItem> = youtubeResponse.items;

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  public videos: SearchItem[] = youtubeResponse.items;

  public dateSort: boolean;
  public countSort: boolean;
  public searchText: string;

  public sortActive: boolean = false;
  public hasResponse: boolean = false;

  public videoId: string;
  public video: SearchItem;

  constructor() { }

  public findVideo(): void {
    // tslint:disable-next-line: no-inferrable-types
    for (let i: number = 0; i < this.videos.length; i++) {
      if (this.videos[i].id === this.videoId) {
        this.video = this.videos[i];
      }
    }
  }

  public toggleSortPanelState(): void {
    if (this.hasResponse) {
      this.sortActive ? this.sortActive = false : this.sortActive = true;
    }
  }

  public showResults(): void {
    this.hasResponse = true;
  }

  public logOut(): void {
    this.sortActive = false;
    this.hasResponse = false;
  }
}
