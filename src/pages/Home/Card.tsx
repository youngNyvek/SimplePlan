import React, { useRef } from 'react';
import { View, Text, Dimensions } from 'react-native';
import VasernDB, { Plans } from '../../database/vasernIndex';
import 'intl';
import 'intl/locale-data/jsonp/en';
import ICard from './ICard'
import Swipeable from 'react-native-gesture-handler/Swipeable';


import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import RightItem from './DeleteButton';
import { useNavigation } from '@react-navigation/native';

const Card: React.FC<ICard> = ({ month, year, id, expenseTotal, revenueTotal }) => {
    const toNumExpenseTotal = +expenseTotal;
    const toNumRevenueTotal = +revenueTotal;
    const moneySalt = toNumExpenseTotal + toNumRevenueTotal;
    const SwipeRef: any = useRef(null);

    const navigation = useNavigation();

    return (
        <Swipeable
        enabled
        ref={SwipeRef}
        overshootRight={false}
        onSwipeableLeftWillOpen={() => {SwipeRef.current.close()}}
        renderRightActions={(progress, dragx) => <RightItem id={id}  SwipeRef={SwipeRef}/>}>
            <RectButton
                style={[principalCardStyles.View]}
                onPress={() => navigation.navigate('Details', {itemId: id})}
            >
                <View style={principalCardStyles.leftBlock} />

                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>
                        {month?.toLocaleUpperCase()}
                    </Text>
                    <Text style={{ fontSize: 16, color: '#fff', letterSpacing: 1.5 }}>
                        {year}
                    </Text>
                </View>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View >

                        <Text style={principalCardStyles.currencyText}>
                            {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(toNumRevenueTotal)}
                        </Text>
                    </View>
                    <View >
                        <Text style={principalCardStyles.currencyText}>
                            {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(toNumExpenseTotal)}
                        </Text>
                    </View>
                    <View >
                        <Text style={principalCardStyles.currencyText}>
                            {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(moneySalt)}
                        </Text>
                    </View>
                </View>



                {/* <View >
                <Icons name="trash" size={20} color="red" onPress={removeItens}/>
            </View> */}

            </RectButton >
        </Swipeable>
    )
}

const principalCardStyles = StyleSheet.create({
    View: {
        backgroundColor: '#4d4d4d',
        padding: 5,
        borderRadius: 8,
        marginBottom: 5,
        flex: 1,
        height: 110
    },
    leftBlock: {
        backgroundColor: '#72bf49',
        borderTopLeftRadius: 15,
        width: '80%',
        marginRight: 5,
        height: 2,
        alignSelf: 'center'
    },
    textLabel: {
        fontSize: 14,
        color: '#fff'
    },
    currencyText: {
        fontSize: 14,
        color: '#72bf49'
    }
})


export default Card;