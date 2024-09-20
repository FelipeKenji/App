import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Animated,ScrollView, Image } from 'react-native';
import { useRef } from 'react';

const H_MAX_HEIGHT = 200;
const H_MIN_HEIGHT = 55;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

  

export default function Animacao() {

  


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
    inputRange: [0,100],
    outputRange: [150, 80],
    extrapolate: 'clamp',
  })

  return (
    
    <View style={{ flex: 1 }}> 
    <StatusBar backgroundColor={"#FFFFFF"} barStyle="light-content" transLucent={false} />
    {/*<Animated.View
      style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndx: 99,
          width: '100%',
          height: headerScrollHeight,
          padding: 10,
        
          allingItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
      }}
      >
      <Animated.Image source={require('./../images/logo.png')}
      style={{
        position: 'absolute',
          top: 40,
          left: 0,
          right: 0,
          zIndx: 99,
          width: '100%',
          height: imageScaleHeight,
          padding: 10,
          
          allingItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
      }}
      resizeMode='contain'
      />
      
      </Animated.View>
      <View style={styles.container}>
        <Image source={require('./../images/procurar.png')}
              style={styles.search}
        
        />
        <Image source={require('./../images/silhueta-de-mulher.png')}
            style={styles.search}   
        />
    
      </View>
      {/* <Text style={styles.title}>Ofertas de Trabalho</Text> */}
      <FlatList
        style={{
           
        }}
        data={data}
        horizontal
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
  container: {
    flexDirection: 'row',
    marginTop: 180,
    marginBottom:50,
    marginHorizontal:-120,
    
  },
  search: {
    flex:1,
    resizeMode: 'contain',
    height:50,
    flexDirection: 'column',


  },
  title:{
    fontSize: 22,
    textAlign: 'center',
    paddingBottom:15,
    paddingTop:40,
    fontWeight: 'bold',
  }
});