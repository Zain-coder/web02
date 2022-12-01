import React from "react";
import { createContext, useState } from "react";
const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [token, setToken] = useState(null);
  const [userdata, setUserData] = useState(null);

  return (
    <UserContext.Provider value={{ token, userdata, setToken, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
