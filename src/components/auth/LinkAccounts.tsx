"use client";

import { auth } from "@/lib/auth";
import React from "react";

type Account = Awaited<ReturnType<typeof auth.api.listUserAccounts>>[number];

const LinkAccounts = ({ accounts }: { accounts: Account[] }) => {
  return (
    <React.Fragment>
      <main className="">
        <pre>{JSON.stringify(accounts, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default LinkAccounts;
