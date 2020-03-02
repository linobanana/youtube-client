import { MatSnackBar } from '@angular/material/snack-bar';
import { SearchResponse } from './../models/search-response.model';
import { SearchItem } from './../models/search-item.model';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SnackBarComponent } from 'src/app/shared/components/snack-bar/snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  public videos: SearchItem[];

  public userInput: string;

  public dateSort: boolean;
  public countSort: boolean;
  public searchText: string;

  public sortActive: boolean = false;
  public hasResponse: boolean = false;

  public videoId: string;
  public nextPageToken: string;

  constructor(
    private _httpClient: HttpClient,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) { }

  private findVideoWithStatistics(ids: string): void {
    this._httpClient.get(`videos${ids}`).subscribe((res: SearchResponse) => {
      this.hasResponse = true;
      this.videos.push(...res.items);
    },                                             () => {
      this.navigateTo404();
      this.hasResponse = false;
      this.videos = [];
    });
  }

  public showSnackBar(): void {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 5000,
      data: `Something went wrong. Please try again.`
    });
  }

  public getVideo(): void {
    this._httpClient.get(`videos${this.videoId}`).subscribe(res => {
      return res;
    });
  }

  public toggleSortPanelState(): void {
    if (this.hasResponse) {
      this.sortActive ? this.sortActive = false : this.sortActive = true;
    }
  }

  public searchResults(url: string = this.userInput): void {
    if (this.userInput !== undefined) {
      this.hasResponse = false;
      if (!url.includes('pageToken')) {
        this.videos = [];
      }
      this._httpClient.get(`search${url}`).subscribe(
        (res: SearchResponse) => {
          this.nextPageToken = res.nextPageToken;
          let ids: string = res.items.map((item: SearchItem) => item.id.videoId).join(',');
          this.findVideoWithStatistics(ids);
          if (res.items.length === 0) {
            this.hasResponse = false;
            this._router.navigateByUrl('404');
          }
        },
        () => { this.navigateTo404(); }
      );
    } else {
      this.showSnackBar();
    }
  }

  public navigateTo404(): void {
    this._router.navigateByUrl('404');
  }

  public logOut(): void {
    this.sortActive = false;
    this.hasResponse = false;
  }
}
