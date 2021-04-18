import React, { createContext, useContext, useState } from 'react';
import { View } from 'react-native';
import NewItem from '../pages/NewItem/Main';
interface ISelectedIDContext {
    selectedID: number;
}

export const SelectedIDContext = createContext<ISelectedIDContext>({} as ISelectedIDContext);

export const SelectedIDProvider: React.FC = ({children}) => {
    return (
        <SelectedIDContext.Provider value={{ selectedID: 50 }}>
            {children}
        </SelectedIDContext.Provider>
    )

}

export default SelectedIDContext;