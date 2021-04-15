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

interface IHeaderComponent {
    translationY: Animated.SharedValue<number>;
}

const HeaderComponent: React.FC<IHeaderComponent> = ({translationY}) => {

  
  const headerAnimatedStyle= useAnimatedStyle(() => {
    return {
      height: interpolate(translationY.value,[50, 150],[80,30], Extrapolate.CLAMP)
    }
  });

  const simplePlanAnimatedStyle= useAnimatedStyle(() => {
    return {
      opacity: interpolate(translationY.value,[100, 150],[1,0], Extrapolate.CLAMP)
    }
  });

  return (
    <Animated.View style={[Header.View, headerAnimatedStyle ]}>

    <Animated.View
      style={[Header.TextView, simplePlanAnimatedStyle]}>
      <Text
        style={Header.TextStyle1}
      >$imple</Text>
      <Text
        style={Header.TextStyle2}
      >Plan</Text>
    </Animated.View>

      <Icons style={Header.Icon} color="white" name="plus" size={30}/>
  </Animated.View>
  )
}

const Header = StyleSheet.create({
    View: {
      flexDirection: 'row',
      backgroundColor: '#72bf49', 
      height: 80, 
      borderBottomLeftRadius: 20, 
      borderBottomRightRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    TextView: {
      flexDirection: 'row'
    },
    TextStyle1: {
      textAlignVertical: 'center', 
      textAlign: 'center', 
      fontSize: 22,
      color:'#fff',
      fontWeight:'700',
    },
    TextStyle2: { 
      fontSize: 22,
      color:'#72bf49',
      backgroundColor: '#fff',
      fontWeight:'700',
      fontStyle:'italic',
      paddingHorizontal: 5
    },
    Icon: {
      position:'absolute', 
      bottom: -20,
      backgroundColor:'#292929', 
      padding:5, 
      zIndex: 1, 
      textAlign: 'center',
      justifyContent: 'center',
      borderRadius: 100, 
   }

  })

export default HeaderComponent;