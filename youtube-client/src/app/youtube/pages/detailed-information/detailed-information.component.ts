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

  constructor(private _youtubeService: YoutubeService, private _location: Location) { }

  public ngOnInit(): void {
    this._youtubeService.findVideo();
    this.video = this._youtubeService.video;
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
