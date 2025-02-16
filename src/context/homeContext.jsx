import { createContext, useState } from "react";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
    const [homeState, setHomeState] = useState('generate');

    return (
        <HomeContext.Provider value={{ homeState, setHomeState }}>
            {children}
        </HomeContext.Provider>
    )
}