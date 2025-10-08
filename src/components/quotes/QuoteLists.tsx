"use client";

import React from "react";
import ItemLists from "../share/ItemLists";
import { Quote } from "@/app/(authenticated)/quotes/page";
import QuoteCard from "../share/QuoteCard";

const QuoteLists = ({ quotes }: { quotes: Quote[] }) => {
  return (
    <React.Fragment>
      <ItemLists items={quotes!} renderFn={returnQuoteCard} />
    </React.Fragment>
  );
};
export default QuoteLists;

export function returnQuoteCard(item: Quote) {
  return <QuoteCard key={item.id} {...item} />;
}
