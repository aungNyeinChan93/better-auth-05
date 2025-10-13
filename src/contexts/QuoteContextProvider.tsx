"use client";

import React, { createContext, ReactNode, useState } from "react";

type InitailStateType = {
  quotes: any[] | null;
  addQuotes: (quotes: any) => void;
};

const initailState: InitailStateType = {
  quotes: [],
  addQuotes: (quotes: any[]) => {},
};

export const QuoteContext = createContext<InitailStateType>(initailState);

const QuoteContextProvider = ({ children }: { children: ReactNode }) => {
  const [quotes, setQuotes] = useState<any[] | null>(null);

  const addQuotes = (quotes: any) => {
    setQuotes(quotes);
  };

  //   const getQuotes = () => {
  //     return state?.quotes;
  //   };

  return (
    <React.Fragment>
      <QuoteContext.Provider value={{ quotes, addQuotes }}>
        {children}
      </QuoteContext.Provider>
    </React.Fragment>
  );
};

export default QuoteContextProvider;
