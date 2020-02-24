import { youtubeResponse } from './../../../shared/mocks/youtube-response';
import { Component, OnInit, Input } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.css']
})
export class DetailedInformationComponent implements OnInit {
  // @Input() public video: SearchItem;

  public video: SearchItem = youtubeResponse.items[0];
  public shortDesc: boolean = true;

  constructor() { }

  public ngOnInit(): void {
  }

  public showFullDescription($event: MouseEvent): void {
    $event.preventDefault();
    this.shortDesc = false;
  }

  public hideFullDescription($event: MouseEvent): void {
    $event.preventDefault();
    this.shortDesc = true;
  }

}
