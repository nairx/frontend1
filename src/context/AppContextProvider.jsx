import React, { useState } from "react";
import { createContext } from "react";
export const AppContext = createContext();
export default function AppContextProvider({children}) {
  const [user, setUser] = useState({});
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}
