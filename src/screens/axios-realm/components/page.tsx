import React, {FunctionComponent} from 'react';
import {Page as PageBase} from '../../../components/page';
import {useBooks} from '../database/books';
import {useBooksQuery} from '../graphql/use-books-query';
import {usePage} from '../providers/page-provider';

export const Page: FunctionComponent = ({}) => {
  const page = usePage();
  const {loading, error} = useBooksQuery(page);
  const books = useBooks(page);

  return <PageBase data={{books}} loading={loading} error={error} />;
};
