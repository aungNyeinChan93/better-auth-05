import ThemeContextProvider from "@/contexts/ThemeContextProvider";
import UserContextProvider from "@/contexts/UserContextProvider";
import React from "react";

const TestLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </React.Fragment>
  );
};

export default TestLayout;
