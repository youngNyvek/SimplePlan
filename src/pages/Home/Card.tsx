import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';
import ICard from './ICard'
const Card: React.FC<ICard> = ({ month, year, id }) => {
    return (
        <View 
            style={{ 
                    backgroundColor: '#4d4d4d' , 
                    flexDirection: 'row', 
                    padding:20,
                    borderRadius: 15,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 10
                }}
        >

            <View style={{backgroundColor: '#72bf49', width: 2, height: 50, marginRight: 5}}/>

           
            <View style={{ flex: 1}}>
                <Text style={{fontSize: 20, color:'#fff'}}>
                    {month.toLocaleUpperCase()}
                </Text>
                <Text style={{fontSize: 16, color:'#fff', letterSpacing: 2}}>
                    {year}
                </Text>
            </View>

            <View style={{flexDirection: 'row', flex: 3}}>
                <View style={{flex: 1, justifyContent: 'flex-end'}}> 
                    <Text style={{fontSize: 14, color:'#fff'}}>
                        Renda
                    </Text>
                    <Text style={{fontSize: 14, color:'#72bf49'}}>
                        R$ 1250
                    </Text>
                </View>

                <View style={{flex: 1}}>
                    <Text style={{fontSize: 14, color:'#fff'}}>
                        Despesa
                    </Text>
                    <Text style={{fontSize: 14, color:'#72bf49'}}>
                        R$ 700
                    </Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 14, color:'#fff'}}>
                        Saldo
                    </Text>
                    <Text style={{fontSize: 14, color:'#72bf49'}}>
                        R$ 300
                    </Text>
                </View>

            </View>
            
        </View >)
}

export default Card;