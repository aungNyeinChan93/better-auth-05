"use client";

import { UserContext } from "@/contexts/UserContextProvider";
import { useSession } from "@/lib/authClient";
import React, { ReactNode, use, useEffect } from "react";

const Template = ({ children }: { children: ReactNode }) => {
  const { data } = useSession();
  const { addUser } = use(UserContext);

  useEffect(() => {
    if (data) {
      addUser(data?.user);
    }
  }, [data]);

  return (
    <React.Fragment>
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Template;
