import React, { useState, useContext, createContext } from 'react';

const UserContext = createContext(null);

export function UserProvider({ children }) {
    const [user, setUser] = useState({});
    
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') ? true : false);
    
    return (
        <UserContext.Provider value={{ isLoggedIn ,setIsLoggedIn }}>
        {children}
        </UserContext.Provider>
    );
}
export function useUser() {
    let context= useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
      }
      return context;
}

