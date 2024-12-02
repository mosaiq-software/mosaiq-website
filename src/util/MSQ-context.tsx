import React, { createContext, useContext, useState } from 'react';


type MSQContextType = {
    
}

const MSQContext = createContext<MSQContextType | undefined>(undefined);


const MSQProvider: React.FC<any> = ({ children }) => {

    return (
        <MSQContext.Provider value={{
            
        }}>
            {children}
        </MSQContext.Provider>
    )
};

const useMSQ = () => {
    const context = useContext(MSQContext);
    if (context === undefined) {
        throw new Error('useMSQ must be used within a MSQProvider');
    }
    return context;
}

export { MSQProvider, useMSQ as useAPT };