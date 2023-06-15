import React from 'react';
import { View, Text } from 'react-native';

const RowText = ({
  messageOne,
  messageTwo,
  containerStyles,
  messageStylesOne,
  messageStylesTwo,
}) => {
  return (
    <View style={containerStyles}>
      <Text style={messageStylesOne}>{messageOne}</Text>
      <Text style={messageStylesTwo}>{messageTwo}</Text>
    </View>
  );
};

export default RowText;
