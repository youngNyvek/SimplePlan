import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Feather';

import Expense from '../pages/Details/Expense';
import Revenue from '../pages/Details/Revenue';
import { useRoute } from '@react-navigation/core';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();


const BottomTab: React.FC = () => {

  return( 
    <Tab.Navigator
        tabBarOptions={{
            showLabel: false,
            style: {
                position: 'absolute',
                bottom: 0,
                left: 5,
                right: 5,
                elevation: 0,
                backgroundColor: '#72bf49',
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                height: 50,
            },
        }}
        initialRouteName="Details"
    >
        <Tab.Screen 
            name="Expenses" 
            component={Expense}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{
                        alignItems: 'center', 
                        justifyContent: 'center', 
        
                        flexDirection: 'row'
                        }}>
                        <Icons
                            color={focused ? 'white' : '#223b15'}
                            name="chevrons-down"
                            size={25}
                        />
                        <Text style={{
                            color: focused ? 'white' : '#223b15',
                            fontSize: 16
                        }}>
                            Despesas
                        </Text>
                    </View>
                )
            }}
        />
        <Tab.Screen 
            name="Revenue" 
            component={Revenue}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        flexDirection: 'row',
                   
                        }}>
                        <Icons
                            color={focused ? 'white' : '#223b15'}
                            name="chevrons-up"
                            size={25}
                        />
                        <Text style={{
                            color: focused ? 'white' : '#223b15',
                            fontSize: 16
                        }}>
                            Receitas
                        </Text>
                    </View>
                )
            }}
        />
      
    </Tab.Navigator>
    );
}

export default BottomTab;