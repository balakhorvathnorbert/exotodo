import React from 'react';
import {CheckBox, View} from 'react-native';

const CheckBox = ({ isCompleted }) => {

  return (
    <View className="flex-1 items-center justify-center">
      <View className="mb-5">
        <CheckBox value={isCompleted} />
      </View>
    </View>
  );
};

export default CheckBox;