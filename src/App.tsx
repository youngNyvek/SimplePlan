import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StatusBar } from 'react-native';

import Routes from './routes/RoutesNavigation';

const App : React.FC = () => {
    return(
            <NavigationContainer>
                <StatusBar barStyle='light-content' backgroundColor='#72bf49' hidden/>
                    <View style={{flex: 1}}> 
                        <Routes/>
                    </View>
            </NavigationContainer>

    )
}
export default App;