"use client";

import Btn from "@/components/share/Btn";
import { authClient, useSession } from "@/lib/authClient";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const OauthTestPage = () => {
  const router = useRouter();

  useEffect(() => {
    authClient.getSession().then((session) => {
      if (session) return router.push("/");
    });
  }, []);

  const session = useSession();
  console.log({ session });

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
