import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const IconText = ({
  iconName,
  iconColor,
  textBody,
  bodyTextStyle,
  sizeIcon,
}) => {
  return (
    <View style={styles.wrapper}>
      <Feather name={iconName} color={iconColor} size={sizeIcon} />

      <Text style={[styles.textTheme, bodyTextStyle]}>{textBody}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTheme: {
    color: 'white',
  },

  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default IconText;
