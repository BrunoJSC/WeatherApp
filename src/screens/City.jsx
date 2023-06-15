import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  ImageBackground,
  View,
} from 'react-native';
import moment from 'moment';

import IconText from '../components/IconText';

const City = ({ weatherData }) => {
  const { name, country, population, sunrise, sunset } = weatherData;

  if (!name) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={styles.imageLayout}
      >
        <Text style={styles.cityName}>{name}</Text>
        <Text style={styles.countryName}>{country}</Text>

        <View style={styles.populationWrapper}>
          <IconText
            iconName={'user'}
            iconColor="white"
            sizeIcon={24}
            textBody={`Population: ${population}`}
            bodyTextStyle={styles.populationText}
          />
        </View>

        <View style={styles.riseSetWrapper}>
          <IconText
            iconName={'sunrise'}
            iconColor="white"
            sizeIcon={24}
            textBody={moment.unix(sunrise).format('LT')}
            bodyTextStyle={styles.riseSetText}
          />

          <IconText
            iconName={'sunset'}
            iconColor="white"
            sizeIcon={24}
            textBody={moment.unix(sunset).format('LT')}
            bodyTextStyle={styles.riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },

  imageLayout: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  cityName: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },

  countryName: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },

  populationWrapper: {
    backgroundColor: '#000000a0',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  populationText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
  },

  riseSetWrapper: {
    backgroundColor: '#000000a0',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  riseSetText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 8,
  },
});

export default City;
