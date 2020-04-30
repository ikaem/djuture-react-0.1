import React, { createContext, useState } from "react";

export const UserContext = createContext({});

const UserProvider = ({children}) => {

    const [ user, setUser ] = useState({
        id: 1,
        name: "Karlo",
        email: "marinovic@gmail.com"
    })

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;