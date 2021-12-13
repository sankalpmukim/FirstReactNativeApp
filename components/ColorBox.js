import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
const ColorBox = ({ colorName, colorHex }) => {
  return (
    <View style={[styles.colorBox, { backgroundColor: colorHex }]}>
      <View style={styles.center}>
        <Text style={[styles.text]}>{`${colorName} ${colorHex}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  colorBox: {
    paddingVertical: 20,
    marginVertical: 10,
    borderRadius: 10,
    textAlign: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ColorBox;
