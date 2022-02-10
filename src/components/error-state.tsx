import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  error: Error;
}

export const ErrorState: FunctionComponent<Props> = ({error}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.error}>Error: {error.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    paddingLeft: 32,
    paddingRight: 32,
    color: 'red',
  },
});
