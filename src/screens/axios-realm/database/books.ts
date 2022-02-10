import {useEffect, useMemo, useState} from 'react';
import {Book} from '../../../typings/books';
import {useRealm} from '../providers/realm-provider';

export const BOOK = 'Book';

export const BookSchema = {
  name: BOOK,
  properties: {
    id: 'string',
    title: 'string',
    body: 'string',
    _page: 'int',
  },
  primaryKey: 'id',
};

export function useBooks(page: number): Book[] {
  const realm = useRealm();

  const collection = useMemo(() => {
    return realm.objects(BOOK).filtered('_page == $0', page);
  }, [realm, page]);

  const [, forceUpdate] = useState(0);
  useEffect(() => {
    const listener = () => {
      forceUpdate(s => s + 1);
    };
    collection.addListener(listener);
    return () => {
      collection.removeListener(listener);
    };
  }, [collection]);

  return collection.map(b => b.toJSON());
}
