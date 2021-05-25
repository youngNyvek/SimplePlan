import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Feather';

import Expense from '../pages/Details/Expense';
import Revenue from '../pages/Details/Revenue';
import NewExRe from '../pages/NewExRv/Main';
import { useRoute } from '@react-navigation/core';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();


interface IBottomTab {
    itemId: any
}
const BottomTab: React.FC<IBottomTab> = ({ itemId }) => {
    const navigation = useNavigation();

    console.log('route', itemId)
    return (
        <>
        <RectButton
              onPress={() => navigation.navigate('NewExRv')}
              style={{
                position: 'absolute',
                backgroundColor: '#72bf49',
                padding: 8,
                zIndex: 1,
                bottom: 130,
                right: 40,
                borderRadius: 100
            }}
        >
              <Icons
                color="white"
                name="plus"
                size={30}
              />
            </RectButton>
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 10,
                    right: 10,
                    // elevation: 0,
                    backgroundColor: '#72bf49',
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                    height: 60,
                },
            }}
            initialRouteName="Expenses"
            backBehavior={'none'}
        >
            <Tab.Screen
                name="Expenses"
                component={Expense}
                options={{
                    tabBarIcon: ({ focused }) => (
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
                initialParams={{ itemId: itemId }}
            />

            <Tab.Screen
                name="Revenue"
                component={Revenue}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row'
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
                initialParams={{ itemId: itemId }}
            />

        </Tab.Navigator>
        </>

    );
}

export default BottomTab;