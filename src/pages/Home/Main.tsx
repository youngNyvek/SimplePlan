import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  event,
  createAnimatedPropAdapter,
  withTiming,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

import Card from './Card'
import Header  from './Header';
const Home: React.FC = () => {
  const data = [1,2,3,4,5,6,7,1,2,3,4,5,6,71,2,3,4,5,6,71,2,3,4,5,6,7];
  const translationY = useSharedValue(0);
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const scrollhandle = useAnimatedScrollHandler({
    onScroll: (e) => {
      translationY.value = e.contentOffset.y;
    },

  })
  return (
    <View style={{flex: 1}}>
          
          <Header translationY={translationY}/>
              
          <AnimatedFlatList
          style={[{padding: 20, zIndex: -1}]}
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



export default Home;