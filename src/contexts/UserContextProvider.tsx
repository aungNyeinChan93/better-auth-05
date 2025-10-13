"use client";

import React, { createContext, useState } from "react";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  emailVerified: boolean;
  name: string;
  image?: string | null | undefined;
};

interface UserContextType {
  user: User | null;
  addUser: (user: User) => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  addUser: () => {},
});

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const addUser = (user: User) => {
    setUser(user);
  };

  return (
    <React.Fragment>
      <UserContext.Provider value={{ user, addUser }}>
        {children}
      </UserContext.Provider>
    </React.Fragment>
  );
};

export default UserContextProvider;
