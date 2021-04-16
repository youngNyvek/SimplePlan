import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable, Button } from 'react-native';

import Icons from 'react-native-vector-icons/Feather';


import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

interface IHeaderComponent {
  translationY: Animated.SharedValue<number>;
}

const HeaderComponent: React.FC<IHeaderComponent> = ({ translationY }) => {
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(translationY.value, [50, 150], [80, 30], Extrapolate.CLAMP)
    }
  });

  const simplePlanAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(translationY.value, [100, 150], [1, 0], Extrapolate.CLAMP)
    }
  });

  return (
   
      <Animated.View style={[HeaderStyle.View, headerAnimatedStyle]}>

        <Animated.View
          style={[HeaderStyle.TextView, simplePlanAnimatedStyle]}>
          <Text
            style={HeaderStyle.TextStyle1}
          >$imple</Text>
          <Text
            style={HeaderStyle.TextStyle2}
          >Plan</Text>
        </Animated.View>

      </Animated.View>
  )
}

const HeaderStyle = StyleSheet.create({
  View: {
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
    fontSize: 30,
    color: '#fff',
    fontWeight: '700',
  },
  TextStyle2: {
    fontSize: 30,
    color: '#72bf49',
    backgroundColor: '#fff',
    fontWeight: '700',
    fontStyle: 'italic',
    paddingHorizontal: 5
  }

})

export default HeaderComponent;