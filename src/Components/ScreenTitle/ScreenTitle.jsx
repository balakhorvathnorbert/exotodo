import React from 'react';
import { View } from 'react-native';

const ScreenTitle = ({ titleText, todoCount }) => {

  return (
    <View className="mx-auto items-center justify-center flex flex-row">
      <Text className="font-bold text-lg">{titleText} </Text>
      <Text className="rounded-full p-[5px] bg-gray-300 text-center w-[32px] h-[32px]">{todoCount}</Text>
    </View>
  );
}

export default ScreenTitle;