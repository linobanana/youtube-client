import { SearchItem } from './../models/search-item.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countOfViews'
})
export class CountOfViewsPipe implements PipeTransform {

  public transform(allCards: SearchItem[], countSort: boolean): SearchItem[] {
    switch (countSort) {
      case undefined:
        return allCards;
      case true:
        return allCards.sort((a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount));
      case false:
        return allCards.sort((a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount));
      default:
        break;
    }
  }

}
