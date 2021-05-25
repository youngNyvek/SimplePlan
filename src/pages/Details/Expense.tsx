import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Expenses } from '../../database/vasernIndex';
import Card from './DetailsCard';
// import { Container } from './styles';
interface IExpense{
  route: any
}
const Expense: React.FC<IExpense> = ({route}) => {
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
    let expenses = Expenses.filter(itemId).data();
    let itens: any = [];

    expenses.map((item: any, index) => {
      itens.push({ id:item.id, name: item.name, value: item.value, plan_id: item.plan_id, date:item.date})
    });
    setDataState(itens);
  }

  async function onInit() {
      Expenses.onLoaded(() => { getItens() });
      Expenses.onChange(() => { getItens() });
  }


  useEffect(() => {
    onInit();
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


export default Expense;