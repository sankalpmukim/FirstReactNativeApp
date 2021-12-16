import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import Separator from './Separator';

const ColorToggle = ({ colorName, checkedValue, setCheckedValue }) => {
  const [isEnabled, setIsEnabled] = useState(checkedValue);
  return (
    <View>
      <Text>{colorName}</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={(v) => {
          setIsEnabled(!v);
          setCheckedValue(!v);
        }}
        value={isEnabled}
      />
      <Separator />
    </View>
  );
};

export default ColorToggle;
