import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { View, Pressable, Text } from 'react-native';
import { RectButtonProperties, RectButton } from 'react-native-gesture-handler';


// import { Container } from './styles';
interface IAppButton extends RectButtonProperties{
    children: string;
}
const AppButon: React.FC<IAppButton> = ({children, ...rest}) => {
  return (
        <RectButton 
          {...rest}
          style={{
                width: '80%',
                backgroundColor: '#72bf49',
                alignSelf: 'center',
                padding: 20, 
                borderRadius: 15,
                alignItems: 'center'
          }}
          >
              <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}> 
                {children}
              </Text>
        </RectButton>
    );
}

export default AppButon;