"use client";

import { Todo } from "@/app/(authenticated)/todos/page";
import React, { ReactNode, use } from "react";

const TodoLists = ({
  todosPromise,
  renderFn,
}: {
  todosPromise: Promise<unknown[]>;
  renderFn: (todo: Todo) => ReactNode;
}) => {
  const [todos] = use(todosPromise);

  return (
    <React.Fragment>
      <main>
        {Array.isArray(todos) &&
          todos?.map((todo: Todo) => {
            return renderFn(todo);
          })}
      </main>
    </React.Fragment>
  );
};

export default TodoLists;
