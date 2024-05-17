import { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div>
            <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
                {children}
            </DarkModeContext.Provider>
        </div>
    )
}

export const useDarkMode = () => useContext(DarkModeContext);