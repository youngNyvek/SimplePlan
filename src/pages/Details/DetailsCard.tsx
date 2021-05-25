import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// import { Container } from './styles';

interface IRevenue {
  date: Date;
  name: string;
  value: string;
  id: any;
}
const Revenue: React.FC<IRevenue> = ({ date, name, value }) => {
  return (
    <View style={styles.Card}>
      <View style={styles.CardContent}>
        <View style={styles.TextContent}>
          <Text style={styles.TextLabels}>
            {`${date.toLocaleDateString()}`}
          </Text>
          <Text style={styles.TextLabels}>
            {name}
          </Text>
          <Text style={styles.TextLabels}>
            {value}
          </Text>
        </View>
      </View>
      <View style={styles.Divisor} />
    </View>
  );
}

const styles = StyleSheet.create({
  Card: {
    flex: 1,
    backgroundColor: '#4d4d4d',
    padding: 10,
    paddingTop: 20
  },
  CardContent: {
    height: 50,
  },
  TextLabels: {
    color: '#fff',
    fontSize: 18
  },
  TextContent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  Divisor: {
    width: '100%',
    height: 1,
    backgroundColor: '#fff',
    bottom: 0
  }
})

export default Revenue;