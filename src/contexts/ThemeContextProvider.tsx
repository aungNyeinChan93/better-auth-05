"use client";

import React, { createContext, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

interface InitialType {
  theme: "light" | "dark";
  setTheme?: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

export const ThemeContext = createContext<InitialType>({
  theme: "light",
  setTheme: undefined,
});

const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
