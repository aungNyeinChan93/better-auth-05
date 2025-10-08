"use client";

import React, { ReactNode } from "react";

interface Props {
  items?: any[];
  renderFn: (item: any) => ReactNode;
}

const ItemLists = ({ items, renderFn }: Props) => {
  return (
    <React.Fragment>
      <main className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {items && Array.isArray(items) && items?.map((item) => renderFn(item))}
      </main>
    </React.Fragment>
  );
};

export default ItemLists;
