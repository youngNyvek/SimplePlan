import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import Icons from 'react-native-vector-icons/Feather';

import { RectButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';
import Card from './Card'
import Header from './Header';
import { Plans } from '../../database/vasernIndex';

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [dataState, setDataState] = useState<any>([]);

  const renderedItem = useCallback(({ item, index }) => {
    return (
      <Card
        month={item.month}
        year={item.year}
        id={item.id}
        expenseTotal={item.expenseValue}
        revenueTotal={item.revenueValue}
      />
    )
  }, []);

  function getItens() {
    let plans = Plans.data();
    let itens: any = [];
    plans.map((item: any) => {
      itens.push({ id: item.id, month: item.month, year: item.year, expenseValue: item.expenseValue, revenueValue: item.revenueValue })
    });

    console.log('getItens itens', itens);
    setDataState(itens);
  }


  useEffect(() => {
    Plans.onLoaded(() => { console.log('onLoaded'); getItens() });
    Plans.onChange(() => { console.log('onChange'); getItens() });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Header />
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
              style={[Main.CenterIcon]}
            >
              <Icons
                color="white"
                name="plus"
                size={30}
              />
            </RectButton>
          </View>
          :
          <>
            <FlatList
              data={dataState}
              contentContainerStyle={Main.FlatList}
              renderItem={renderedItem}
              keyExtractor={(item, index) => `item${index}`}
            />
            <RectButton
              onPress={() => navigation.navigate('NewItem')}
              style={[Main.Icon]}
            >

              <Icons
                color="white"
                name="plus"
                size={30}
              />
            </RectButton>
          </>
      }

    </View>
  )

}

const Main = StyleSheet.create({
  FlatList: { padding: 20, paddingBottom: 10, zIndex: 1 },
  Icon: {
    position: 'absolute',
    backgroundColor: '#72bf49',
    padding: 8,
    zIndex: 1,
    bottom: 130,
    right: 40,
    borderRadius: 100,
  },
  CenterIcon: {
    position: 'relative',
    backgroundColor: '#72bf49',
    marginTop: 20,
    borderRadius: 100,
    padding: 8,

  },
  CenterText: {
    color: '#4d4d4d',
    fontSize: 20,
    textAlign: 'center'
  }
})



export default Home;