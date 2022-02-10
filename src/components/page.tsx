import React, {FunctionComponent, ReactElement} from 'react';
import {View, StyleSheet} from 'react-native';
import {BooksQueryResponse} from '../typings/books-query-response';
import {Books} from './books';
import {ErrorState} from './error-state';
import {LoadingState} from './loading-state';

interface Props {
  data?: BooksQueryResponse;
  loading?: boolean;
  error?: Error | null;
}

export const Page: FunctionComponent<Props> = ({data, loading, error}) => {
  let content: ReactElement | null = null;
  if (data && data.books && data.books.length) {
    content = <Books books={data.books} />;
  } else if (loading) {
    content = <LoadingState />;
  } else if (error) {
    content = <ErrorState error={error} />;
  } else {
    content = <View style={styles.emptyContainer} />;
  }
  return content;
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
  },
});
