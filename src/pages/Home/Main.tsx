import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import TouchableScale from 'react-native-touchable-scale';

import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

import Card from './Card'
import Header  from './Header';
const Home: React.FC = () => {
  const navigation = useNavigation();
  const data = [1,2,3,4,5,6,7,1,2,3,4,5,6,71,2,3,4,5,6,71,2,3,4,5,6,7];
  const translationY = useSharedValue(0);
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const AnimatedTouchableScale = Animated.createAnimatedComponent(TouchableScale);
  const scrollhandle = useAnimatedScrollHandler({
    onScroll: (e) => {
      translationY.value = e.contentOffset.y;
    },

  })
  const plusButtonAnimatedStyles = useAnimatedStyle( () => {
    return {
      top: interpolate(translationY.value, [50, 150], [60, 10], Extrapolate.CLAMP)
    }
  })
  
  return (
    <View style={{flex: 1}}>
          <AnimatedTouchableScale
          activeScale={0.9}
          onPress={() => navigation.navigate('NewItem')} 
          style={[Main.Icon, plusButtonAnimatedStyles]}
          >

          <Icons
            color="white"
            name="plus"
            size={30}
            />
        </AnimatedTouchableScale>

          <Header translationY={translationY}/>
              
          <AnimatedFlatList
          style={[Main.FlatList]}
          data={data}
          renderItem={ () => {
            return(
              <Card/>

            )
          }}
          keyExtractor={(item, index) => `item${index}`}
          onScroll={scrollhandle}
          />
 
    </View>

  
  )

}

const Main = StyleSheet.create({
  FlatList: {padding: 20, zIndex: -1},
  Icon: {
    position:  'absolute',
    backgroundColor: '#292929',
    padding: 5,
    zIndex: 1,
    alignSelf:'center',
    borderRadius: 100,

  }
})


export default Home;