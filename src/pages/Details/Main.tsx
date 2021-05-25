import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import TabNav from '../../routes/BottomTab';

interface IDetails {
    route: any
}

const Details: React.FC<IDetails> = ({route}) => {

    const { itemId } = route.params;
    console.log(itemId)
  return (
        <View style={{ flex: 1 , backgroundColor: '#4d4d4d'}}>
            <Header itemId={itemId}/>
            <TabNav itemId={itemId}/>
        </View>
    
  )
}

export default Details;