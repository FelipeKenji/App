import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Animated,ScrollView, Image } from 'react-native';
import { useRef } from 'react';

const H_MAX_HEIGHT = 200;
const H_MIN_HEIGHT = 55;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

  

export default function App() {


  const data = [
      { id: '1', title: 'Empregadora 1'},
      { id: '2', title: 'Empregadora 2'},
      { id: '3', title: 'Empregadora 3'},
      { id: '4', title: 'Empregadora 4'},
      { id: '5', title: 'Empregadora 5'},
      { id: '6', title: 'Empregadora 6'},
      { id: '7', title: 'Empregadora 7'},
  ];

  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: 'clamp'
  })

  const imageScaleHeight = scrollOffsetY.interpolate({
    inputRange: [0,150],
    outputRange: [80, 34],
    extrapolate: 'clamp',
  })

  return (
    
    <View style={{ flex: 1 }}> 
    <StatusBar backgroundColor={"#FFFFFF"} barStyle="light-content" transLucent={false} />
    <Animated.View
      style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndx: 99,
          width: '100%',
          height: headerScrollHeight,
          padding: 10,
          backgroundColor:"#4e5283",
          allingItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
      }}
      >
      <Animated.Image source={require('./images/logo.png')}
      style={{
        
        width: 80,
        height: imageScaleHeight, 
      }}
      resizeMode='contain'
      />
      </Animated.View>
      {/* <Text style={styles.title}>Ofertas de Trabalho</Text> */}
      <FlatList
        style={{
            paddingTop: H_MAX_HEIGHT,
        }}
        data={data}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={[styles.item, styles.color]}>
            <Text>{item.title}</Text>
          </View>
        )}

        onScroll={Animated.event([
            {nativeEvent: {contentOffset: {y: scrollOffsetY } } },
        ], { useNativeDriver: false})}
        scrollEventThrottle={16}

      />
    </View>
   
   
  );
}


const styles = StyleSheet.create({
  containerHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
    
  },
  item: {
    width:150,
    backgroundColor: '#d9bbf9',
    height:130,
    justifyContent: "center",
    alignItems: 'center',
    padding:20,
    paddingRight: 30,
    fontWeight: 'bold',
    margin:8,
  },
  title:{
    fontSize: 22,
    textAlign: 'center',
    paddingBottom:15,
    paddingTop:40,
    fontWeight: 'bold',
  }
});
