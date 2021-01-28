import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PRIMARY_COLOR } from '../utils';

const ReloadIcon = ({ getCurrentLocation }) => {
  const reloadIconName = Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh';
  return (
    <View style={styles.reloadIcon}>
      <Ionicons
        onPress={getCurrentLocation}
        name={reloadIconName}
        size={24}
        color={PRIMARY_COLOR}
      />
    </View>
  );
};

export default ReloadIcon;

const styles = StyleSheet.create({
  reloadIcon: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
});
