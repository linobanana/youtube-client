import { SearchItem } from './../models/search-item.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSortPipe'
})
export class DateSortPipe implements PipeTransform {

  public transform(allCards: SearchItem[], dateSort: boolean): SearchItem[] {
    switch (dateSort) {
      case undefined:
        return allCards;
      case true:
        return allCards.sort((a, b) => new Date(b.snippet.publishedAt).getTime()
        - new Date(a.snippet.publishedAt).getTime());
      case false:
        return allCards.sort((a, b) => new Date(a.snippet.publishedAt).getTime()
        - new Date(b.snippet.publishedAt).getTime());
      default:
        break;
    }
  }

}
