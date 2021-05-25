import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Cards from './Cards';
import AppButton from '../../components/Button';

import VasernDB, { Plans } from '../../database/vasernIndex';
import { useNavigation } from '@react-navigation/native';
import ICard from '../Home/ICard';
const NewItem: React.FC = () => {
  const navigate = useNavigation()


  return (
    <View style={{ flex: 1 }}>

      <Text style={NewItemStyles.HeaderText}>Nova ocorrência</Text>
      <View style={NewItemStyles.CardView}>
        
        <AppButton >
            Adicionar
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
    borderRadius: 50,
  },
  TextLabel: { fontSize: 35, color: '#fff', fontWeight: '700', marginVertical: 20, textAlign: 'left', marginLeft: 20 },
})

export default NewItem;