import {Book} from './books';

export interface BooksQueryResponse {
  books: (Book & {__typename?: 'Book'})[];
}
