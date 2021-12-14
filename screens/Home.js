import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const Home = ({ navigation }) => {
  const SOLARIZED = [
    { colorName: 'Base03', hexCode: '#002b36' },
    { colorName: 'Base02', hexCode: '#073642' },
    { colorName: 'Base01', hexCode: '#586e75' },
    { colorName: 'Base00', hexCode: '#657b83' },
    { colorName: 'Base0', hexCode: '#839496' },
    { colorName: 'Base1', hexCode: '#93a1a1' },
    { colorName: 'Base2', hexCode: '#eee8d5' },
    { colorName: 'Base3', hexCode: '#fdf6e3' },
    { colorName: 'Yellow', hexCode: '#b58900' },
    { colorName: 'Orange', hexCode: '#cb4b16' },
    { colorName: 'Red', hexCode: '#dc322f' },
    { colorName: 'Magenta', hexCode: '#d33682' },
    { colorName: 'Violet', hexCode: '#6c71c4' },
    { colorName: 'Blue', hexCode: '#268bd2' },
    { colorName: 'Cyan', hexCode: '#2aa198' },
    { colorName: 'Green', hexCode: '#859900' },
  ];
  const RAINBOW = [
    { colorName: 'Red', hexCode: '#FF0000' },
    { colorName: 'Orange', hexCode: '#FF7F00' },
    { colorName: 'Yellow', hexCode: '#FFFF00' },
    { colorName: 'Green', hexCode: '#00FF00' },
    { colorName: 'Violet', hexCode: '#8B00FF' },
  ];
  const FRONTEND_MASTERS = [
    { colorName: 'Red', hexCode: '#c02d28' },
    { colorName: 'Black', hexCode: '#3e3e3e' },
    { colorName: 'Grey', hexCode: '#8a8a8a' },
    { colorName: 'White', hexCode: '#ffffff' },
    { colorName: 'Orange', hexCode: '#e66225' },
  ];

  const COLOR_PALETTES = [
    {
      paletteName: 'Solarized',
      colors: SOLARIZED,
    },
    {
      paletteName: 'Frontend Masters',
      colors: FRONTEND_MASTERS,
    },
    {
      paletteName: 'Rainbow',
      colors: RAINBOW,
    },
  ];
  return (
    <View>
      <FlatList
        data={COLOR_PALETTES}
        keyExtractor={(_item, idx) => idx}
        renderItem={({ item: value, index: idx }) => (
          <TouchableOpacity
            key={idx}
            onPress={() => {
              navigation.navigate('ColorPalette', {
                paletteName: value.paletteName,
                COLORS: value.colors,
              });
            }}
          >
            <View>
              <View
                style={{
                  paddingHorizontal: 10,
                  paddingTop: 10,
                  paddingBottom: 5,
                }}
              >
                <Text
                  style={{
                    fontWeight: 'bold',
                  }}
                >
                  {value.paletteName}
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                {value.colors.slice(0, 5).map((colour, idx) => (
                  <View
                    key={idx}
                    style={{
                      marginHorizontal: 10,
                      height: 50,
                      width: 50,
                      backgroundColor: colour.hexCode,
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 1 },
                      shadowOpacity: 0.3,
                      shadowRadius: 1,
                      elevation: 2,
                    }}
                  ></View>
                ))}
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
