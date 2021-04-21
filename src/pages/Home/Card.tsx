import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import VasernDB, { Plans } from '../../database/vasernIndex';
import 'intl';
import 'intl/locale-data/jsonp/en';
import ICard from './ICard'

import Animated, {
    useSharedValue,
    withSpring,
    useAnimatedStyle,
    useAnimatedGestureHandler,
    interpolate,
    Extrapolate,
    createWorklet

} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useState } from 'react';




const Card: React.FC<ICard> = ({ month, year, id, expenseTotal, revenueTotal }) => {
    const toNumExpenseTotal = +expenseTotal;
    const toNumRevenueTotal = +revenueTotal;
    const moneySalt = toNumExpenseTotal + toNumRevenueTotal;
    const windowWidth = Dimensions.get('window').width;
    const thirdParseNegative = -(windowWidth / 3);
    const windowWidth100Negative = -windowWidth - 100
    const [isDeleted, setIsDeleted] = useState(false);
    console.log('w', windowWidth / 3);

    const posX = useSharedValue(0);

    const gestureHandler = useAnimatedGestureHandler({
        onActive: (event) => {
            event.translationX > 0
                ?
                null
                :
                posX.value = event.translationX;
            console.log('posx', posX.value);

        },
        onEnd: (_) => {
            console.log('posx', posX.value);
            posX.value = withSpring(posX.value <= -(windowWidth / 3) ? windowWidth100Negative : 0)
        }
    });
    const animatedCardStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: posX.value
                },
            ],
        };

    });
    const cardHidedStyle = useAnimatedStyle(() => {
        return {
            opacity: posX.value > 0 ? 0 : 1,
            left: interpolate(posX.value, [thirdParseNegative, -windowWidth], [40, 0], Extrapolate.CLAMP)
        }

    });
    const MainCardStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(posX.value, [-windowWidth, windowWidth100Negative], [1, 0]),
            height: interpolate(posX.value, [-windowWidth, windowWidth100Negative], [120, 0], Extrapolate.CLAMP)
        }
    })

    async function removeItens() {

        setTimeout(() => {
            posX.value <= -(windowWidth / 3)
                ?
                Plans.remove(id)
                :
                null
        }, 400)


    }

    return (
        <Animated.View style={[MainCardStyle]}>
            <PanGestureHandler onGestureEvent={gestureHandler} onEnded={removeItens}>
                <Animated.View
                    style={[principalCardStyles.View, animatedCardStyle]}
                >
                    <View style={principalCardStyles.leftBlock} />

                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 20, color: '#adadad' }}>
                            {month}
                        </Text>
                        <Text style={{ fontSize: 16, color: '#adadad', letterSpacing: 1.5 }}>
                            {year}
                        </Text>
                    </View>

                    <View style={{ flex: 2 }}>
                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                            <Text style={principalCardStyles.textLabel}>
                                Renda
                            </Text>
                            <Text style={principalCardStyles.currencyText}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(toNumRevenueTotal)}
                            </Text>
                        </View>
                        <View style={{ flex: 1 }}>

                            <Text style={principalCardStyles.textLabel}>
                                Despesa
                            </Text>
                            <Text style={principalCardStyles.currencyText}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(toNumExpenseTotal)}
                            </Text>
                        </View>
                    </View>

                    <View style={{ flex: 2, flexDirection: 'row' }}>

                        <View style={{ flex: 1 }}>
                            <Text style={principalCardStyles.textLabel}>
                                Saldo
                    </Text>
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

                </Animated.View >
            </PanGestureHandler>

            <Animated.View style={[hideItemStyle.View, cardHidedStyle]}>
                <Text style={[hideItemStyle.DeleteText]}>Remover</Text>
            </Animated.View>
        </Animated.View>
    )
}

const principalCardStyles = StyleSheet.create({
    View: {
        backgroundColor: '#4d4d4d',
        flexDirection: 'row',
        padding: 20,
        borderRadius: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        flex: 1
    },
    leftBlock: {
        backgroundColor: '#72bf49',
        borderTopLeftRadius: 15,
        width: 10,
        marginRight: 5,
        left: 0,
        top: 0,
        bottom: 0,
        position: 'absolute'
    },
    textLabel: {
        fontSize: 14,
        color: '#adadad'
    },
    currencyText: {
        fontSize: 14,
        color: '#72bf49'
    }
})

const hideItemStyle = StyleSheet.create({
    View: {
        backgroundColor: '#bf4949',
        position: 'absolute',
        right: 0,
        bottom: 0,
        top: 0,
        left: 200,
        zIndex: -1,
        padding: 20,
        borderRadius: 15,
        marginBottom: 10,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    DeleteText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500'
    }
})

export default Card;