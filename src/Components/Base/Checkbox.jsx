import React from 'react';
import {View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const Checkbox = ({ isCompleted }) => {
  const completionIcon = isCompleted ? 'fa-regular fa-square-check' : 'fa-regular fa-square'

    return (
      <View className="flex-1 items-left">
          <FontAwesomeIcon icon={completionIcon} />
        </View>
    );
};

export default Checkbox;