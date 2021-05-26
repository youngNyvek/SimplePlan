import React from 'react';

import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import {  RectButton } from 'react-native-gesture-handler';



// import { Container } from './styles';

interface ICard {
    id: number;
    text: string;
    setIsSelectedId: React.Dispatch<React.SetStateAction<number>>;
    selectedID: number;
}

const Card: React.FC<ICard> = ({ id, text, setIsSelectedId, selectedID }) => {

    return (
        <View>
            <RectButton
                style={CardStyles.CardView}
                onPress={() =>{setIsSelectedId(id);}}
            >

                    <View style={[CardStyles.Line, selectedID == id ? { backgroundColor: '#72bf49' } : { backgroundColor: '#4d4d4d' }]} />
                        <Text style={CardStyles.ItemText}>
                            {text.toLocaleUpperCase()}
                        </Text>
                    <View style={[CardStyles.Line, selectedID == id ? { backgroundColor: '#72bf49' }  : { backgroundColor: '#4d4d4d' }]} />


            </RectButton>
        </View>
    )
}

const CardStyles = StyleSheet.create({
    CardView: {
        backgroundColor: '#292929',
        width: 150,
        height: 60,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        padding: 8
    },
    Line: { 
        width: 100, 
        height: 2, 
        marginRight: 5
    },
    ItemText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center',
        textAlignVertical: 'center',
        flex:1
    }
})

export default Card;