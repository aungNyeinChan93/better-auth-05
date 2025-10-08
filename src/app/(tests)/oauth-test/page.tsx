"use client";

import Btn from "@/components/share/Btn";
import { authClient } from "@/lib/authClient";
import React from "react";

const OauthTestPage = () => {
  return (
    <React.Fragment>
      <main>
        <Btn
          className="bg-red-50 p-2 rounded-r-full"
          type="button"
          onClick={() =>
            authClient.signIn.social({ provider: "github", callbackURL: "/" })
          }
        >
          Google
        </Btn>
        <Btn
          className="bg-red-50 p-2 rounded-r-full"
          type="button"
          onClick={() =>
            authClient.signIn.social({ provider: "github", callbackURL: "/" })
          }
        >
          Google
        </Btn>
      </main>
    </React.Fragment>
  );
};

export default OauthTestPage;
