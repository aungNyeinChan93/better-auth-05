import UserContextProvider from "@/contexts/UserContextProvider";
import React, { ReactNode } from "react";

const LayoutPage = async ({ children }: { children: ReactNode }) => {
  return (
    <React.Fragment>
      <UserContextProvider>
        <main>{children}</main>
      </UserContextProvider>
    </React.Fragment>
  );
};

export default LayoutPage;
