import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Cards from './Cards';
import AppButton from '../../components/Button';

import VasernDB, { Plans } from '../../database/vasernIndex';
import { useNavigation } from '@react-navigation/native';
import ICard from '../Home/ICard';
const NewItem: React.FC = () => {
  const navigate = useNavigation()

  const [monthIdSelected, setMonthIdSelected] = useState(0);
  const [yearIdSelected, setYearIdSelected] = useState(0);
  
  const months = [
    {
      text: 'Jan',
      id: 1
    },
    {
      text: 'Fev',
      id: 2
    },
    {
      text: 'Mar',
      id: 3
    },
    {
      text: 'Abr',
      id: 4
    },
    {
      text: 'Mai',
      id: 5
    },
    {
      text: 'Jun',
      id: 6
    },
    {
      text: 'Jul',
      id: 7
    },
    {
      text: 'Ago',
      id: 8
    },
    {
      text: 'Set',
      id: 9
    },
    {
      text: 'Out',
      id: 10
    },
    {
      text: 'Nov',
      id: 11
    },
    {
      text: 'Dez',
      id: 12
    },
  ]

  const years: {text: string, id: number}[] = [];
  const currentYear = new Date().getFullYear();
  for ( let y = currentYear; y <= currentYear+10; y++ ){
    years.push({text: `${y}`, id: y});
  }

  const doIt = () => {
    const getSelectedMonth = months.filter(month => {return month.id == monthIdSelected});
    const getSelectedYear = years.filter(year => {return year.id == yearIdSelected});

    Plans.insert({
      month: getSelectedMonth[0].text,
      year: getSelectedYear[0].text,
    });
    
    navigate.goBack();

  }

  return (
      <View style={{ flex: 1 }}>

        <Text style={NewItemStyles.HeaderText}>NOVO PLANEJAMENTO</Text>
        <View style={NewItemStyles.CardView}>

          <View>
            <Text style={NewItemStyles.TextLabel}>
              Mês
          </Text>
            <Cards setSelectedID={setMonthIdSelected} cardData={months}/>
          </View>

          <View>
            <Text style={NewItemStyles.TextLabel}>
              Ano
          </Text>
            <Cards setSelectedID={setYearIdSelected} cardData={years}/>
          </View>

        </View>

        <View style={{
          backgroundColor: '#4d4d4d',
          flex: 1
        }}>
        <AppButton onPress={doIt} enabled={monthIdSelected == 0|| yearIdSelected == 0 ? false : true}>
            Iniciar novo planejamento
        </AppButton>
  
        </View>

      </View>

  );
}

const NewItemStyles = StyleSheet.create({
  HeaderText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 30,
    color: '#72bf49',
    fontWeight: 'bold',
    flex: 1,
  },
  CardView: {
    flex: 4,
    backgroundColor: '#4d4d4d',
    borderTopStartRadius: 100,
  },
  TextLabel: { fontSize: 35, color: '#fff', fontWeight: '700', marginVertical: 30, textAlign: 'right', marginRight: 20 },
})

export default NewItem;