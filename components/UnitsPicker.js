import { Picker } from '@react-native-community/picker';
import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const UnitsPicker = ({ unitSystem, setUnitSystem }) => {
  return (
    <View style={styles.unitSystem}>
      <Picker
        selectedValue={unitSystem}
        onValueChange={(i) => setUnitSystem(i)}
        mode='dropdown'
        itemStyle={{ fontSize: 12 }}
      >
        <Picker.Item label='C°' value='metric' />
        <Picker.Item label='F°' value='imperial' />
      </Picker>
    </View>
  );
};

export default UnitsPicker;

const styles = StyleSheet.create({
  unitSystem: {
    position: 'absolute',
    ...Platform.select({
      ios: {
        top: -20,
      },
      android: {
        top: 30,
      },
    }),
    left: 20,
    height: 50,
    width: 100,
  },
});
