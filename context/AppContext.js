import React, { createContext, useEffect, useRef, useState } from 'react'

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    // Password Visible
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <AppContext.Provider value={{
            passwordVisible,
            togglePasswordVisibility,
        }}>
        </AppContext.Provider>

    )
}

export { AppContext, AppContextProvider }