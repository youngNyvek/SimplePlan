import React from 'react';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { View } from 'react-native';
import Card from './Card';

// import { Container } from './styles';

const MonthCad: React.FC = () => {
  const [selectedID, setIsSelectedId] = useState(Number);

  const mounths = [
    {
      mes: 'Jan',
      id: 1
    },
    {
      mes: 'Fev',
      id: 2
    },
    {
      mes: 'Mar',
      id: 3
    },
    {
      mes: 'Abr',
      id: 4
    },
    {
      mes: 'Mai',
      id: 5
    },
    {
      mes: 'Jun',
      id: 6
    },
    {
      mes: 'Jul',
      id: 7
    },
    {
      mes: 'Ago',
      id: 8
    },
    {
      mes: 'Set',
      id: 9
    },
    {
      mes: 'Out',
      id: 10
    },
    {
      mes: 'Nov',
      id: 11
    },
    {
      mes: 'Dez',
      id: 12
    },
  ]


  return (
    <FlatList
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={50}
            style={{ height: 100, flexGrow: 0, paddingHorizontal: 10 }}
            horizontal
            data={mounths}
            renderItem={(render) => {
              return (
                <Card id={render.item.id} text={render.item.mes} selectedID={selectedID} setIsSelectedId={setIsSelectedId}/>
              )
            }}
            keyExtractor={(item, index) => {
              return `${item.mes}${item.id}`
            }}
          />
  )
}

export default MonthCad;