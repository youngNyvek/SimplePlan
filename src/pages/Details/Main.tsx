import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import TabNav from '../../routes/BottomTab';

interface IDetails {
    route: any
}

const Details: React.FC<IDetails> = ({route}) => {

    const { itemId } = route.params;

  return (
        <View style={{ flex: 1 , backgroundColor: '#4d4d4d'}}>
            <Header itemId={itemId}/>
            <TabNav/>
        </View>
    
  )
}

export default Details;