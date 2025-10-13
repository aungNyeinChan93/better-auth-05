"use client";

import { QuoteContext } from "@/contexts/QuoteContextProvider";
import { UserContext } from "@/contexts/UserContextProvider";
import { getAllQuotes } from "@/features/quotes/quotes.utils";
import { useSession } from "@/lib/authClient";
import React, { ReactNode, use, useEffect } from "react";

const Template = ({ children }: { children: ReactNode }) => {
  const { data } = useSession();
  const { addUser } = use(UserContext);

  const { addQuotes } = use(QuoteContext);

  useEffect(() => {
    addUser(data?.user!);
  }, [data]);

  useEffect(() => {
    (async () => {
      const quotes = await getAllQuotes();
      addQuotes(quotes);
    })();
  }, [addQuotes]);

  return (
    <React.Fragment>
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Template;
