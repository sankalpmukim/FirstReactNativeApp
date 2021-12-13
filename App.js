import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import ColorBox from './components/ColorBox';

const App = () => {
  const colors = ['2aa198', '268bd2', 'd33682', 'cb4b16'];
  const colorNames = ['Cyan', 'Blue', 'Magenta', 'Orange'];
  return (
    <NavigationContainer>
      <SafeAreaView style={[styles.safeArea]}>
        <View style={styles.container}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>
              Here are some boxes of different colours
            </Text>
            {colors.map((val, idx) => (
              <ColorBox
                colorHex={`#${val}`}
                colorName={colorNames[idx]}
                key={idx}
              />
            ))}
            {/* <FlatList
            data={colors}
            keyExtractor={(_colors, idx) => idx}
            renderItem={({ item, index }) => (
              <ColorBox colorHex={`#${item}`} colorName={colorNames[index]} />
            )}
          /> */}
          </View>
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'pink',
    justifyContent: 'center',
    flex: 1,
  },
  safeArea: {
    flex: 2,
  },
});

export default App;
