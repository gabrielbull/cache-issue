import {BooksQueryResponse} from '../../../typings/books-query-response';
import axios from 'axios';
import {useEffect, useRef, useState} from 'react';

const BOOKS_QUERY = `
  query BooksQuery($page: Int!) {
    books(page: $page) {
      id
      title
      body
    }
  }
`;

interface State {
  data?: BooksQueryResponse;
  loading: boolean;
  error?: Error;
}

export function useBooksQuery(page: number): State {
  const mounted = useRef(true);
  useEffect(
    () => () => {
      mounted.current = false;
    },
    [],
  );

  const [state, setState] = useState<State>({
    loading: true,
  });

  useEffect(() => {
    axios
      .post('http://192.168.1.41:4000', {
        operationName: 'BooksQuery',
        query: BOOKS_QUERY,
        variables: {page},
      })
      .then(response => {
        if (mounted.current) {
          setState({
            loading: false,
            data: response.data.data,
            error: undefined,
          });
        }
      })
      .catch(err => {
        if (mounted.current) {
          setState({loading: false, data: undefined, error: err});
        }
      });
  }, [page]);

  return state;
}
