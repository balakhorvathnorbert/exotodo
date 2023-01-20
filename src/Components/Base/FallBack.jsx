import React from 'react';
import {View, Text} from 'react-native';

const Fallback = ({ todo }) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: 100,
        padding: 20,
      }}>
      <Text>No todo left...</Text>
    </View>
  );
};

export default Fallback;