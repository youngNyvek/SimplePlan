import React, { useState } from 'react';
import { Text, View, FlatList, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import Card from './Card';
import MonthCards from './MonthCards';
import YearCards from './YearCards';

// import { Container } from './styles';

const NewItem: React.FC = () => {
  
  

  return (

    <View style={{ flex: 1 }}>

      <Text style={NewItemStyles.HeaderText}>NOVO PLANEJAMENTO</Text>
      <View style={NewItemStyles.CardView}>

        <View>
          <Text style={NewItemStyles.TextLabel}>
            Mês
          </Text>
          <MonthCards/>
        </View>

        <View>
          <Text style={NewItemStyles.TextLabel}>
            Ano
          </Text>
          <YearCards/>

        </View>

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
    flex: 5,
    backgroundColor: '#4d4d4d',
    borderTopStartRadius: 100,

  },
  TextLabel: { fontSize: 50, color: '#fff', fontWeight: '700', marginVertical: 30, textAlign: 'right', marginRight: 20 },
})

export default NewItem;