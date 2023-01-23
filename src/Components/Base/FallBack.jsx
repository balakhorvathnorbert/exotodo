import React from 'react';
import {View, Text} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Fallback = () => {
  return (
    <View
      style={{
        height: 100,
        padding: 20,
        marginTop: 20,
        marginBottom: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
       <FontAwesomeIcon icon="fa-regular fa-face-smile" size={58} />
       <Text className="mt-4 font-bold text-xl">No more todos left...</Text>
    </View>
  );
};

export default Fallback;