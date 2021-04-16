import React, { createContext, useContext, useState } from 'react';
import { View } from 'react-native';

const [selectedID, setIsSelectedId] = useState(0);
export const SelectedIDContext = createContext({selectedID, setIsSelectedId});

const SelectedIDProvider: React.FC = ({ children }) => {

    return (
        <SelectedIDContext.Provider
        value={{
                selectedID,
                setIsSelectedId
            }}>
            {children}
        </SelectedIDContext.Provider>
    )
}

export function useSelectedID(){
    const context = useContext(SelectedIDContext);
    const {selectedID, setIsSelectedId} = context;
    return {selectedID, setIsSelectedId};
}
export default SelectedIDProvider;