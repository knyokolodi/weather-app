import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

import { BORDER_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from '../utils';

const WeatherDetails = ({ currentWeather, unitSystem }) => {
  const {
    main: { feels_like, humidity, pressure },
    wind: { speed },
  } = currentWeather;

  const windSpeed =
    unitSystem === 'metric' ? `${Math.round(speed)} m/s` : `${Math.round(speed)} m/h`;

  return (
    <View style={styles.weatherDetails}>
      <View style={styles.weatherDetailsRow}>
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: BORDER_COLOR,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <FontAwesome5 name='temperature-low' size={25} color={PRIMARY_COLOR} />
            <Text>Feels like: </Text>
            <Text style={styles.secondaryText}>{feels_like} °</Text>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons name='water' size={30} color={PRIMARY_COLOR} />
            <Text>Humidity: </Text>
            <Text style={styles.secondaryText}>{humidity} %</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          ...styles.weatherDetailsRow,
          borderTopWidth: 1,
          borderTopColor: BORDER_COLOR,
        }}
      >
        <View
          style={{
            ...styles.weatherDetailsBox,
            borderRightWidth: 1,
            borderRightColor: BORDER_COLOR,
          }}
        >
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons name='weather-windy' size={30} color={PRIMARY_COLOR} />
            <Text>Wind Speed: </Text>
            <Text style={styles.secondaryText}>{windSpeed}</Text>
          </View>
        </View>
        <View style={styles.weatherDetailsBox}>
          <View style={styles.weatherDetailsRow}>
            <MaterialCommunityIcons name='speedometer' size={30} color={PRIMARY_COLOR} />
            <Text>Pressure: </Text>
            <Text style={styles.secondaryText}>{pressure} hPa</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WeatherDetails;

const styles = StyleSheet.create({
  weatherDetails: {
    marginTop: 'auto',
    margin: 15,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
  },
  weatherDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  weatherDetailsBox: {
    flex: 1,
    padding: 10,
  },
  weatherDetailsItems: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  secondaryText: {
    fontSize: 15,
    color: SECONDARY_COLOR,
    fontWeight: '700',
  },
});
