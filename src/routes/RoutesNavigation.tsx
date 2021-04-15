import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home/Main'

const Route = createStackNavigator();

export default () => {
  return( 
    <Route.Navigator
    screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#292929'}
    }}
    initialRouteName="Home">
        <Route.Screen name="Home" component={Home}/>
    </Route.Navigator>
    );
}