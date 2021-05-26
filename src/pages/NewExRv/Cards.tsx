import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { View } from 'react-native';
import Card from './Card';

// import { Container } from './styles';
interface ICards{
  cardData: ICardData[];
  setSelectedID: React.Dispatch<React.SetStateAction<number>>;
}

interface ICardData {
  text: string,
  id: number
}
const Cards: React.FC<ICards> = ({setSelectedID, cardData}) => {
  const [selectedID, setIsSelectedId] = useState(Number);
  
  useEffect(()=>{
    setSelectedID(selectedID);
  }, [selectedID]);

  return (
    <View style={CardStyles.View}>
      {
        cardData.map(res => (
          <Card id={res.id} text={res.text} key={res.id} selectedID={selectedID} setIsSelectedId={setIsSelectedId}/>
        ))
      }

    </View>
  )
}

const CardStyles = StyleSheet.create({
    View: {
      flexDirection: 'row',
      alignItems: 'center', 
      justifyContent: 'center'
    }
})

export default Cards;