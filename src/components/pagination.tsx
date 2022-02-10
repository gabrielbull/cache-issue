import React, {
  Dispatch,
  FunctionComponent,
  ReactElement,
  SetStateAction,
} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

interface Props {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export const Pagination: FunctionComponent<Props> = ({page, setPage}) => {
  const isDarkMode = useColorScheme() === 'dark';
  let pages: ReactElement[] = [];
  const color = isDarkMode ? 'white' : 'black';
  for (let i = 0; i < 10; i++) {
    pages.push(
      <TouchableOpacity key={i} onPress={() => setPage(i)}>
        <View
          style={[styles.page, page === i ? styles.selectedPage : undefined]}>
          <Text style={[styles.label, {color}]}>{i + 1}</Text>
        </View>
      </TouchableOpacity>,
    );
  }
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        {pages}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    flex: 0,
  },

  contentContainerStyle: {
    paddingLeft: 16,
    paddingRight: 16,
  },

  page: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectedPage: {
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 0, 0.4)',
  },

  label: {
    color: 'black',
  },
});
