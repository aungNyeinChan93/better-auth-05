"use client";

import { QuoteContext } from "@/contexts/QuoteContextProvider";
import React, { use } from "react";

const QuotesTestPage = () => {
  const { quotes } = use(QuoteContext);
  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(quotes, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default QuotesTestPage;
