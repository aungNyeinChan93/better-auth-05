import QuoteLists from "@/components/quotes/QuoteLists";
import { tryCatch } from "@/helpers/try-catch";
import React from "react";

const getAllQuotes = async () => {
  const { quotes } = await fetch(`https://dummyjson.com/quotes`).then((res) =>
    res.json()
  );
  return quotes;
};

export type Quote = {
  id: number;
  quote: string;
  author: string;
};

const QuotePage = async () => {
  const [quotes] = await tryCatch<Array<Quote>>(getAllQuotes);

  return (
    <React.Fragment>
      <main className="w-full min-h-screen max-w-4xl p-10 mx-auto bg-red-50 my-10 rounded-2xl">
        {quotes && <QuoteLists quotes={quotes} />}
      </main>
    </React.Fragment>
  );
};

export default QuotePage;
