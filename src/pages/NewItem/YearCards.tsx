import React from 'react';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { View } from 'react-native';
import Card from './Card';

// import { Container } from './styles';

const MonthCad: React.FC = () => {
  const [selectedID, setIsSelectedId] = useState(Number);

  const years = [];
  const currentYear = new Date().getFullYear();
  for ( let y = currentYear; y <= currentYear+10; y++ ){
    years.push({year: `${y}`, id: y});
  }

  return (
    <FlatList
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={50}
            style={{ height: 100, flexGrow: 0, paddingHorizontal: 10 }}
            horizontal
            data={years}
            renderItem={(render) => {
              return (
                <Card id={render.item.id} text={render.item.year} selectedID={selectedID} setIsSelectedId={setIsSelectedId}/>
              )
            }}
            keyExtractor={(item, index) => {
              return `${item.year}${item.id}`
            }}
          />
  )
}

export default MonthCad;