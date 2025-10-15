import LinkAccounts from "@/components/auth/LinkAccounts";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const LinkAccountsPage = async () => {
  const accounts = await auth.api.listUserAccounts({
    headers: await headers(),
  });
  const nonCredentailAccounts =
    accounts && accounts.filter((a) => a.providerId !== "credential");

  return (
    <React.Fragment>
      <main className=" w-full min-h-screen bg-green-50">
        <LinkAccounts accounts={nonCredentailAccounts} />
      </main>
    </React.Fragment>
  );
};

export default LinkAccountsPage;
