import React, { useRef } from 'react';
import { View, Text, Dimensions } from 'react-native';
import VasernDB, { Plans } from '../../database/vasernIndex';
import 'intl';
import 'intl/locale-data/jsonp/en';
import ICard from './ICard'
import Swipeable from 'react-native-gesture-handler/Swipeable';


import { StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface IDeleteButton {
    id: any,
    SwipeRef: any
}

const DeleteButton: React.FC<IDeleteButton> = ({id,SwipeRef}) => {
    function handleDeleteItem() {
        Plans.remove(id);
        SwipeRef.current.close()
    }
    return (
        <RectButton style={[hideItemStyle.View]} onPress={handleDeleteItem}>
            <Text style={[hideItemStyle.DeleteText]}>Remover</Text>
        </RectButton>
    )
}




const hideItemStyle = StyleSheet.create({
    View: {
        backgroundColor: '#bf4949',
        height: 110,
        borderRadius: 8,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 20,
        width: 120

    },
    DeleteText: {
        color: 'white',
        fontSize: 20,

        fontWeight: '500'
    }
})

export default DeleteButton;
