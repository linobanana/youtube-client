import { YoutubeService } from './../../../../youtube/services/youtube.service';
import { Component, Input, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnChanges {
  public myControl: FormControl = new FormControl();
  public options: string[];
  public filteredOptions: Observable<string[]>;
  @Input() public auth: boolean;

  constructor(
    private _httpClient: HttpClient,
    private _youtubeService: YoutubeService
  ) {}

  private _filter(value: string): string[] {
    const filterValue: string = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  public ngOnChanges(): void {
    this.auth ? this.myControl.enable() : this.myControl.disable();
  }

  public onKeyUp($event: KeyboardEvent): void {
    if (this.myControl.value.length > 2) {
      // tslint:disable-next-line: no-inferrable-types
      let apiRoot: string = 'https://suggestqueries.google.com/complete/search';
      // tslint:disable-next-line: no-inferrable-types
      let apiUrl: string =
      `${apiRoot}?q=${this.myControl.value}&hl=en&ds=yt&client=youtube&jsonp=JSONP_CALLBACK`;
      this._httpClient.jsonp(apiUrl, 'callback').pipe(
        map(res => {
          this.options = res[1].map(i => i[0]);
          this.options[0] = this.myControl.value;
          this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filter(value))
          );
        })
      ).subscribe();
    }
    if ($event.code === 'Enter') {
      this._youtubeService.userInput = this.myControl.value;
    }
  }
}
