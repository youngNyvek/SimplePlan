import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import TouchableScale from 'react-native-touchable-scale';
import {  RectButton } from 'react-native-gesture-handler';

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

import ICard from './ICard'
const Home: React.FC = () => {
  const navigation = useNavigation();
  const [dataState, setDataState] = useState<ICard[]>([]);

  const translationY = useSharedValue(0);
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const AnimatedRectButton = Animated.createAnimatedComponent(RectButton);
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
  
  const renderedItem = useCallback(({ item, index}) => {
    return(
      <Card
        month={item.month}
        year={item.year}
        id={item.id}
      />
    )
  }, [])

  return (
    <View style={{flex: 1}}>
          <AnimatedRectButton
          onPress={() => navigation.navigate('NewItem')} 
          style={[Main.Icon, plusButtonAnimatedStyles]}
          >

          <Icons
            color="white"
            name="plus"
            size={30}
            />
        </AnimatedRectButton>

          <Header translationY={translationY}/>
              
          <AnimatedFlatList
          style={[Main.FlatList]}
          data={dataState}
          renderItem={renderedItem}
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