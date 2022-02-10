import React, {createContext, FunctionComponent, useContext} from 'react';
import {usePage} from '../providers/page-provider';
import {BooksQueryResponse} from '../../../typings/books-query-response';
import {useBooksQuery} from '../graphql/use-books-query';

const QueryResultContext = createContext<
  | {
      data?: BooksQueryResponse;
      loading: boolean;
      error?: Error;
    }
  | undefined
>(undefined);

export function useQueryResult(): {
  data?: BooksQueryResponse;
  loading: boolean;
  error?: Error;
} {
  return useContext(QueryResultContext)!;
}

export const QueryProvider: FunctionComponent = ({children}) => {
  const page = usePage();
  const result = useBooksQuery(page);
  return (
    <QueryResultContext.Provider value={result}>
      {children}
    </QueryResultContext.Provider>
  );
};
