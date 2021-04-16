import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';

// import { Container } from './styles';

const NewItem: React.FC = () => {
  const [selectedID, setIsSelectedId] = useState(Number);

  const data = [
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
    <View style={{ flex: 1 }}>
      <Text style={{
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 30,
        color: '#72bf49',
        fontWeight: 'bold',
        flex: 1,
      }}>NOVO PLANO</Text>
      <View style={{
        flex: 1,
        backgroundColor: '#4d4d4d',
        borderTopStartRadius: 100
      }}>

        <Text style={{ fontSize: 25, color: '#fff', fontWeight: '700', marginVertical: 30, textAlign: 'center' }}>
          Mês
            </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={50}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          horizontal
          data={data}
          renderItem={(render) => {
            return (
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
                }, selectedID == render.item.id ? { backgroundColor: '#72bf49' } : { backgroundColor: '#292929' }]}
                onPress={() => { setIsSelectedId(render.item.id) }}
              >
                <View style={[{ width: 60, height: 2, marginRight: 5 }, selectedID == render.item.id ? { backgroundColor: '#4d4d4d' } : { backgroundColor: '#72bf49' }]} />
                <Text style={[{
                  fontSize: 18,
                  color: '#fff',
                  fontWeight: '600',
                  marginVertical: 20,
                  textAlign: 'center'
                }]}>
                  {render.item.mes}.
                      </Text>
                <View style={[{ width: 60, height: 2, marginRight: 5 }, selectedID == render.item.id ? { backgroundColor: '#4d4d4d' } : { backgroundColor: '#72bf49' }]} />

              </TouchableScale>

            )
          }}
          keyExtractor={(item, index) => {
            return `${item.id}`
          }}
        />

      </View>

      <View
        style={{
          flex: 2,
          backgroundColor: '#4d4d4d'
        }}
      >
        <Text style={{ fontSize: 25, color: '#fff', fontWeight: '700', marginVertical: 30, textAlign: 'center' }}>
          Ano
            </Text>
      </View>

    </View>);
}

export default NewItem;