import { SearchResponse } from './../../models/search-response.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { YoutubeService } from '../../services/youtube.service';
import { Component, OnInit } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.css']
})
export class DetailedInformationComponent implements OnInit {
  public video: SearchItem;
  public shortDesc: boolean = true;

  constructor(
    private _youtubeService: YoutubeService,
    private _location: Location,
    private _httpClient: HttpClient,
    private _router: Router
  ) {}

  public ngOnInit(): void {
    if (this._youtubeService.videoId) {
      this._httpClient.get(`videos${this._youtubeService.videoId}`).subscribe(
        (res: SearchResponse) => this.video = res.items[0]
      );
    } else {
      this._router.navigateByUrl('404');
    }
  }

  public showFullDescription($event: MouseEvent): void {
    $event.preventDefault();
    this.shortDesc = false;
  }

  public hideFullDescription($event: MouseEvent): void {
    $event.preventDefault();
    this.shortDesc = true;
  }

  public back(): void {
    this._location.back();
  }

}
