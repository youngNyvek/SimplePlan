import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

import Cards from './Cards';
import AppButton from '../../components/Button';

import VasernDB, { Plans } from '../../database/vasernIndex';
import { useNavigation } from '@react-navigation/native';
import ICard from '../Home/ICard';
import CurrencyInput from 'react-native-currency-input';


const NewItem: React.FC = () => {
  const navigate = useNavigation();
  const [itemType, setItemType ] = React.useState(0);
  const [itemValue, setItemValue] = React.useState(0);
  

  const typeDatas = [{text:'Despesa', id: 0},{text:'Receita', id: 1}];


  return (
    <View style={{ flex: 1 }}>
      <View style={NewItemStyles.CardView}>

        <View>
          <Text style={NewItemStyles.TextLabel}>
            Tipo
          </Text>
          <Cards 
            setSelectedID={setItemType} 
            cardData={typeDatas} 
          />
        </View>
        
        <View>
          <Text style={NewItemStyles.TextLabel}>
            Título
          </Text>
          <TextInput style={{
            fontSize: 25,
            color: '#72bf49',
            borderBottomWidth: 1,
            borderBottomColor: '#72bf49',
            textAlign: 'center',

          }}/>
        
        </View>

        <View>
          <Text style={NewItemStyles.TextLabel}>
            Valor
          </Text>
          <CurrencyInput 
            style={{
              fontSize: 25,
              color: '#72bf49',
              borderBottomWidth: 1,
              borderBottomColor: '#72bf49',
              textAlign: 'center',

            }}
            unit="$"
            precision={2}
            value={itemValue}
            onChangeValue={(value: number) => {setItemValue(value)}}
            keyboardType={'number-pad'}
          />
        
        </View>
        <View>
          <AppButton>
              Adicionar
          </AppButton>
        </View>

      </View>

    </View>

  );
}

const NewItemStyles = StyleSheet.create({
  CardView: {
    flex: 4,
    backgroundColor: '#4d4d4d',
    padding: 20
  },
  TextLabel: { fontSize: 35, color: '#fff', fontWeight: '700', marginVertical: 20, textAlign: 'left' },
})

export default NewItem;