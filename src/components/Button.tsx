import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { View, Pressable, Text } from 'react-native';
import { RectButtonProperties, RectButton } from 'react-native-gesture-handler';


// import { Container } from './styles';
interface IAppButton extends RectButtonProperties{
    children: string;
    backgroundColor?: string;
    color?: string;
}
const AppButon: React.FC<IAppButton> = ({children, backgroundColor, color, ...rest}) => {
  return (
        <RectButton 
          {...rest}
          style={{
                width: '80%',
                backgroundColor: backgroundColor ? backgroundColor :'#72bf49',
                alignSelf: 'center',
                padding: 20, 
                borderRadius: 15,
                alignItems: 'center'
          }}
          >
              <Text style={{color: color ? color : '#fff', fontSize: 20, fontWeight: 'bold'}}> 
                {children}
              </Text>
        </RectButton>
    );
}

export default AppButon;