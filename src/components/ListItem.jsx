import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ListItem = ({ dt_text, min, max, condition }) => {
  return (
    <View style={styles.item}>
      <Feather name="sun" size={24} color="white" />
      <Text style={styles.date}>{dt_text}</Text>
      <Text style={styles.temp}>{min}</Text>
      <Text style={styles.temp}>{max}</Text>
      <Text>{condition}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 2,
    backgroundColor: 'pink',
  },

  temp: {
    color: 'white',
    fontSize: 20,
  },

  date: {
    color: 'white',
    fontSize: 15,
  },
});

export default ListItem;
