import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const Home = ({ navigation }) => {
  const [colorPalettes, setColorPalettes] = React.useState([]);
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const fetchPaletteData = React.useCallback(async () => {
    await fetch('https://color-palette-api.kadikraman.vercel.app/palettes')
      .then((res) => res.json())
      .then((res) => setColorPalettes(res));
  });
  React.useEffect(() => {
    fetchPaletteData();
  }, []);

  const refreshAction = React.useCallback(async () => {
    setIsRefreshing(true);
    await fetchPaletteData();
    setIsRefreshing(false);
  });
  return (
    <>
      <View
        style={{
          marginBottom: 10,
          marginTop: 15,
        }}
      >
        <FlatList
          style={{
            marginLeft: 15,
          }}
          ListHeaderComponent={
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AddNewPalette');
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'blue',
                  }}
                >
                  Add new color palette
                </Text>
              </View>
            </TouchableOpacity>
          }
          refreshing={isRefreshing}
          onRefresh={refreshAction}
          data={colorPalettes}
          keyExtractor={(item) => item.id}
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
                        marginRight: 20,
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
    </>
  );
};

export default Home;
