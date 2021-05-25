import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Revenue } from '../../database/vasernIndex';
import Card from './DetailsCard';
// import { Container } from './styles';
interface IRevenues{
  route: any
}
const Revenues: React.FC<IRevenues> = ({route}) => {
  const navigation = useNavigation();
  const { itemId } = route.params;
  const [dataState, setDataState] = useState<any>([]);

  const renderedItem = useCallback(({ item, index }) => {
    return (
      <Card
        date={item.date}
        name={item.name}
        value={item.value}
        id={item.id}
      />
    )
  }, []);

  async function getItens() {
    let revenue = Revenue.filter(itemId).data();
    let itens: any = [];

    revenue.map((item: any, index) => {
      itens.push({ id:item.id, name: item.name, value: item.value, plan_id: item.plan_id, date:item.date})
    });
    setDataState(itens);
  }

  async function onInit() {
      Revenue.onLoaded(() => { getItens() });
      Revenue.onChange(() => { getItens() });
  }


  useEffect(() => {
    onInit()

  }, []);

  return (
        
    <View style={{flex:1, backgroundColor: '#4d4d4d'}}>
      <FlatList
        data={dataState}
        contentContainerStyle={{paddingBottom: 10, backgroundColor: '#4d4d4d' }}
        renderItem={renderedItem}
        keyExtractor={(item, index) => `item${index}`}
      />
    </View>


  );
}


export default Revenues;