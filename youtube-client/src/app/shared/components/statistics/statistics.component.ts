import { SearchResponse } from './../../../youtube/models/search-response.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @Input() public statistics: { [key: string]: string };

  constructor() { }

  ngOnInit() {
  }

}
