import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';

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
            <TouchableScale
                touchSoundDisabled
                activeScale={0.98}
                style={[{
                    backgroundColor: '#292929',
                    width: 100,
                    height: 100,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 10,
                }]}
                onPress={() =>{setIsSelectedId(id);}}
            >
                <View style={[{ width: 60, height: 2, marginRight: 5 }, selectedID == id ? { backgroundColor: '#72bf49' } : { backgroundColor: '#4d4d4d' }]} />
                <Text style={[{
                    fontSize: 18,
                    color: '#fff',
                    fontWeight: '600',
                    marginVertical: 20,
                    textAlign: 'center'
                }]}>
                    {text}
                </Text>
                <View style={[{ width: 60, height: 2, marginRight: 5 }, selectedID == id ? { backgroundColor: '#72bf49' }  : { backgroundColor: '#4d4d4d' }]} />

            </TouchableScale>

        </View>
    )
}

export default Card;