import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'wordFiltering'
})
export class WordFilteringPipe implements PipeTransform {

  public transform(allCards: SearchItem[], searchText: string): SearchItem[] {
    if (searchText) {
      return allCards.filter((item) => item.snippet.title.toLowerCase()
      .indexOf(searchText.toLowerCase()) !== -1);
    }
    return allCards;
  }

}
