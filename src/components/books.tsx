import React, {FunctionComponent} from 'react';
import {Book} from './book';
import {Book as BookType} from '../typings/books';
import {FlatList, StyleSheet} from 'react-native';

interface Props {
  books: BookType[];
}

export const Books: FunctionComponent<Props> = ({books}) => {
  return (
    <FlatList<BookType>
      style={styles.flatList}
      data={books}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Book book={item} />}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
  },
});
