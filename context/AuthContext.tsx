import React, { createContext, useContext, useState } from 'react';
import { AuthContextProps } from '../@types';
import { User } from '../@types';

const AuthContext = createContext<AuthContextProps>({} as any);

export function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>();

  const handleUser = (value: User | undefined) => {
    setUser(value);
  };

  const contextValue: AuthContextProps = {
    user,
    handleUser,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

// use this hook in your component to have access to the AuthContext
export const useAuth = () => useContext(AuthContext);
