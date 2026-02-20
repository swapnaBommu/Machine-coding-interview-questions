// context/AuthContext.jsx
import { createContext, useContext, useState } from "react";

const AuthContextWithOutAPI = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContextWithOutAPI.Provider value={{ user, login, logout }}>
      {children}
    </AuthContextWithOutAPI.Provider>
  );
};

export const useAuthcontext = () => useContext(AuthContextWithOutAPI);