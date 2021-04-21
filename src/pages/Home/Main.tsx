import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
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

import VasernDB, { Plans, Expenses } from '../../database/vasernIndex';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [dataState, setDataState] = useState<any>([]);

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
        expenseTotal={item.expenseValue}
        revenueTotal={item.revenueValue}
      />
    )
  }, []);


  function getItens(){
    let plans = Plans.data();
    console.log('getItens plans', plans);
    let itens:any = [];
    plans.map((item: any, index) => {
      itens.push({id: item.id, month: item.month, year: item.year, expenseValue: item.expenseValue, revenueValue: item.revenueValue})
    });

    console.log('getItens itens', itens);
    setDataState(itens);
  }

  
  // useEffect(()=>{
  //   console.log('primeiro effect')
  //   Plans.onLoaded(() => {console.log('onLoaded'); removeItens()});
  //   Plans.onChange(() => {console.log('onChange'); removeItens()});
  // }, []);

  useEffect(()=>{
    Plans.onLoaded(() => {console.log('onLoaded'); getItens()});
    Plans.onChange(() => {console.log('onChange'); getItens()});
  }, []);

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
              
          

          {
            dataState.length == 0 ?
            <View style={{
              flex: 1, 
              alignItems: 'center',
              justifyContent: 'center',
              
              }}>
                <Text style={Main.CenterText}>
                  Nenhum plano encontrado
                </Text>
                <Text style={Main.CenterText}>
                  Clique no icone para criar um novo
                </Text>
                <RectButton 
                  onPress={() => navigation.navigate('NewItem')} 
                  style={[Main.Icon,Main.CenterIcon]}
                >
                  <Icons
                    color="white"
                    name="plus"
                    size={30}
                    />
                </RectButton>
            </View>
            :
            <AnimatedFlatList
              style={[Main.FlatList]}
              data={dataState}
              renderItem={renderedItem}
              keyExtractor={(item, index) => `item${index}`}
              onScroll={scrollhandle}
            />
          }
 
    </View>

  
  )

}

const Main = StyleSheet.create({
  FlatList: {padding: 20, paddingBottom: 100, zIndex: -1},
  Icon: {
    position:  'absolute',
    backgroundColor: '#292929',
    padding: 5,
    zIndex: 1,
    alignSelf:'center',
    borderRadius: 100,
  },
  CenterIcon: { 
    position: 'relative', 
    backgroundColor:'#72bf49', 
    marginTop: 20
  },
  CenterText:{
    color: '#4d4d4d',
    fontSize: 20,
    textAlign: 'center'
  }
})


export default Home;