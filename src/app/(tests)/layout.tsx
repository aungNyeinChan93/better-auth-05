import QuoteContextProvider from "@/contexts/QuoteContextProvider";
import UserContextProvider from "@/contexts/UserContextProvider";
import React, { ReactNode } from "react";

const LayoutPage = async ({ children }: { children: ReactNode }) => {
  return (
    <React.Fragment>
      <UserContextProvider>
        <QuoteContextProvider>
          <main>{children}</main>
        </QuoteContextProvider>
      </UserContextProvider>
    </React.Fragment>
  );
};

export default LayoutPage;
