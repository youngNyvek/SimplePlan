import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
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
    <FlatList
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={50}
            style={{ height: 100, flexGrow: 0, paddingHorizontal: 10 }}
            horizontal
            data={cardData}
            renderItem={(render) => {
              return (
                <Card id={render.item.id} text={render.item.text} selectedID={selectedID} setIsSelectedId={setIsSelectedId}/>
              )
            }}
            keyExtractor={(item, index) => {
              return `${item.text}${item.id}`
            }}
          />
  )
}

export default Cards;