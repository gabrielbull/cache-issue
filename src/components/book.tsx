import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Book as BookType} from '../typings/books';

interface Props {
  book: BookType;
}

export const Book: FunctionComponent<Props> = ({book}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const color = isDarkMode ? 'white' : 'black';
  return (
    <View style={styles.item}>
      <Text numberOfLines={1} style={[styles.title, {color}]}>
        {book.title}
      </Text>
      <Text numberOfLines={2} style={[styles.body, {color}]}>
        {book.body}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
  },
  body: {
    color: 'black',
  },
});
