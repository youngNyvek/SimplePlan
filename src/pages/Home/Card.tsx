import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const Card: React.FC = () => {
    return (
        <View 
            style={
                { 
                    backgroundColor: '#4d4d4d' , 
                    flexDirection: 'row', 
                    padding:20,
                    borderRadius: 15,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 10
                }
            }
            
        >
            <View style={{ flex: 1}}>
                <Text style={{fontSize: 20, color:'#fff'}}>
                    MAR
                </Text>
                <Text style={{fontSize: 16, color:'#fff', letterSpacing: 2}}>
                    2021
                </Text>
            </View>

            <View style={{flexDirection: 'row', flex: 2}}>
                <View style={{flex: 1, justifyContent: 'flex-end'}}> 
                    <Text style={{fontSize: 12, color:'#fff'}}>
                        Renda
                    </Text>
                    <Text style={{fontSize: 12, color:'#72bf49'}}>
                        R$ 1250
                    </Text>
                </View>

                <View style={{flex: 1}}>
                    <Text style={{fontSize: 12, color:'#fff'}}>
                        Despesa
                    </Text>
                    <Text style={{fontSize: 12, color:'#72bf49'}}>
                        R$ 500
                    </Text>
                </View>
                <View style={{flex: 1}}>
                    <Text style={{fontSize: 12, color:'#fff'}}>
                        Saldo
                    </Text>
                    <Text style={{fontSize: 12, color:'#72bf49'}}>
                        R$ 700
                    </Text>
                </View>

            </View>
            
        </View >)
}

export default Card;