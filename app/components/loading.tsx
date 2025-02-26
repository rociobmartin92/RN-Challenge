import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ActivityIndicator} from 'react-native-paper';
import colors from '../utils/global_colors';

const Loading = () => {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator animating={true} color={colors.primary} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
