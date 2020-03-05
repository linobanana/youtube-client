import { SearchItem } from './search-item.model';

export interface SearchResponse {
  kind: string;
  etag: string;
  nextPageToken?: string;
  pageInfo: { [key: string]: number };
  items: SearchItem[];
}
