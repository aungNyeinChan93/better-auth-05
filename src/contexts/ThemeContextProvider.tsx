"use client";

import React, { createContext, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

interface InitialType {
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  fontSize?: number;
  setFontSize: React.Dispatch<number>;
}

export const ThemeContext = createContext<InitialType>({
  theme: "light",
  setTheme: () => {},
  fontSize: undefined,
  setFontSize: () => {},
});

const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [fontSize, setFontSize] = useState<number | undefined>(undefined);
  return (
    <ThemeContext.Provider value={{ theme, setTheme, fontSize, setFontSize }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
