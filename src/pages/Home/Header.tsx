import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable, Button } from 'react-native';

import Icons from 'react-native-vector-icons/Feather';


const HeaderComponent: React.FC = () => {
 
  return (
   
      <View style={[HeaderStyle.View]}>
        <View
          style={[HeaderStyle.TextView]}>
          <Text
            style={HeaderStyle.TextStyle1}
          >$imple</Text>
          <Text
            style={HeaderStyle.TextStyle2}
          >Plan</Text>
        </View>
      </View>
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