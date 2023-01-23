import React from 'react';
import {View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const Checkbox = ({ todoStyle }) => {

    return (
      <View className="flex-1 items-left">
          <FontAwesomeIcon icon={todoStyle.icon} color={todoStyle.iconColor} />
        </View>
    );
};

export default Checkbox;