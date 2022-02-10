import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SegmentedView} from './components/segmented-view';
import {ReactQuery} from './screens/react-query';
import {Axios} from './screens/axios';
import {AxiosRealm} from './screens/axios-realm';

export const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.safeAreaView]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SegmentedView
        segments={['axios', 'react-query', 'axios-realm']}
        renderSegment={segment =>
          segment === 'axios' ? (
            <Axios />
          ) : segment === 'react-query' ? (
            <ReactQuery />
          ) : segment === 'axios-realm' ? (
            <AxiosRealm />
          ) : null
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
