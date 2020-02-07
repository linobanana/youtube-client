export interface SearchResponse {
  kind: string;
  etag: string;
  pageInfo: { [key: string]: number };
  items: object[];
}
