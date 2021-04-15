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
const Home: React.FC = () => {
  const data = [1,2,3,4,5,6,7];
  const translationY = useSharedValue(0);
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const scrollhandle = useAnimatedScrollHandler({
    onScroll: (e) => {
      translationY.value = e.contentOffset.y;
    },

  })
  const headerStyle= useAnimatedStyle(() => {
    return {
      height: interpolate(translationY.value,[50, 150],[80,30], Extrapolate.CLAMP)
    }
  });

  const gestFinStyles= useAnimatedStyle(() => {
    return {
      opacity: interpolate(translationY.value,[100, 150],[1,0], Extrapolate.CLAMP)
    }
  });

  return (
    <View style={{flex: 1}}>
          <Animated.View style={[Header.View, headerStyle ]}>

            <Animated.View
              style={[Header.TextView, gestFinStyles]}>
              <Text
                style={Header.TextStyle1}
              >$imple</Text>
              <Text
                style={Header.TextStyle2}
              >Plan</Text>
            </Animated.View>

              <Icons style={Header.Icon} color="white" name="plus" size={30}/>
          </Animated.View>
  
              
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

export default Home;