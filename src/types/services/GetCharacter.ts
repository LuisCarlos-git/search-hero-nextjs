export type GetCharacter = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: Data;
};

export type Data = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Result[];
};

export type Result = {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Comics;
  stories: Stories;
  events: Comics;
  urls: URL[];
};

export type Comics = {
  available: number;
  collectionURI: string;
  items: ComicsItem[];
  returned: number;
};

export type ComicsItem = {
  resourceURI: string;
  name: string;
};

export type Stories = {
  available: number;
  collectionURI: string;
  items: StoriesItem[];
  returned: number;
};

export type StoriesItem = {
  resourceURI: string;
  name: string;
  type: ItemType;
};

export enum ItemType {
  Cover = 'cover',
  Empty = '',
  InteriorStory = 'interiorStory'
}

export type Thumbnail = {
  path: string;
  extension: Extension;
};

export enum Extension {
  GIF = 'gif',
  Jpg = 'jpg'
}

export type URL = {
  type: URLType;
  url: string;
};

export enum URLType {
  Comiclink = 'comiclink',
  Detail = 'detail',
  Wiki = 'wiki'
}
