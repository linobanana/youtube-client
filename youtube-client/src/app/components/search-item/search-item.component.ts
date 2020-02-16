import { SearchItem } from './../../models/search-item.model';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  @Input() public video: SearchItem;

  constructor() { }

  public ngOnInit(): void {
  }

}
