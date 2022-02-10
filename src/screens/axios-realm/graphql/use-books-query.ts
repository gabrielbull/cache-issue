import axios from 'axios';
import {useEffect, useRef, useState} from 'react';
import {useRealm} from '../providers/realm-provider';
import {BOOK} from '../database/books';
import {Book} from '../../../typings/books';

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

  const realm = useRealm();

  useEffect(() => {
    axios
      .post('http://192.168.1.41:4000', {
        operationName: 'BooksQuery',
        query: BOOKS_QUERY,
        variables: {page},
      })
      .then(response => {
        realm.write(() => {
          response.data.data.books.map((book: Book) =>
            realm.create(
              BOOK,
              {...book, _page: page},
              Realm.UpdateMode.Modified,
            ),
          );
        });
        if (mounted.current) {
          setState({
            loading: false,
            error: undefined,
          });
        }
      })
      .catch(err => {
        if (mounted.current) {
          setState({loading: false, error: err});
        }
      });
  }, [page, realm]);

  return state;
}
