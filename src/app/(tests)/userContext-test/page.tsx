"use client";

import { UserContext } from "@/contexts/UserContextProvider";
import React, { use } from "react";

const UserContextTestPage = () => {
  const { user } = use(UserContext);
  return (
    <React.Fragment>
      <main>
        <pre>{user && JSON.stringify(user, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default UserContextTestPage;
