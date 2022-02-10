import React, {FunctionComponent, ReactElement, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

interface Props {
  segments: string[];
  renderSegment: (segment: string | null) => ReactElement | null;
}

export const SegmentedView: FunctionComponent<Props> = ({
  segments,
  renderSegment,
}) => {
  const [segment, setSegment] = useState<string | null>(null);
  const isDarkMode = useColorScheme() === 'dark';
  const color = isDarkMode ? 'white' : 'black';

  return (
    <>
      <View style={styles.container}>
        {segments.map(s => (
          <TouchableOpacity
            key={s}
            onPress={() => setSegment(s)}
            style={styles.tabPressable}>
            <View
              style={[
                styles.tab,
                segment === s ? styles.selectedPage : undefined,
              ]}>
              <Text style={[styles.label, {color}]}>{s}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      {renderSegment(segment)}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: 44,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
  },

  tabPressable: {
    flex: 1,
  },

  tab: {
    flex: 1,
    height: 44,
    paddingLeft: 8,
    paddingRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectedPage: {
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 0, 0.4)',
  },

  label: {
    fontSize: 11,
    color: 'black',
  },
});
