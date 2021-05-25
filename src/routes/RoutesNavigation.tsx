import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home/Main';
import NewItem from '../pages/NewItem/Main';
import Details from '../pages/Details/Main';
import NewExRv from '../pages/NewExRv/Main';
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
        <Route.Screen name="NewItem" component={NewItem}/>
        <Route.Screen name="Details" component={Details}/>
        <Route.Screen name="NewExRv" component={NewExRv}/>
      
    </Route.Navigator>
    );
}