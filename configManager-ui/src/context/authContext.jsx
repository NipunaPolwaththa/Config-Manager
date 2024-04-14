/* eslint-disable react/jsx-no-constructed-context-values */
import { useContext, createContext, useState } from 'react';

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth, AuthProvider };
