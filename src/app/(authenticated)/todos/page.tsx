"use client";

import TodoCard from "@/components/todos/TodoCard";
import TodoLists from "@/components/todos/TodoList";
import { getAllTodos } from "@/features/todos/todos-actions";
import { tryCatch } from "@/helpers/try-catch";
import React, { Suspense } from "react";

export type Todo = {
  id: number | string;
  todo: string;
  completed: boolean;
  userId: number | string;
};

const TodoPages = () => {
  const todosPromise = tryCatch<Array<Todo>>(getAllTodos); //data from database so use server-action, dont use (use hook)
  return (
    <React.Fragment>
      <main>
        <Suspense fallback={<p className="text-red-600">Loading . . . </p>}>
          <TodoLists
            todosPromise={todosPromise!}
            renderFn={(todo) => <TodoCard key={todo?.id} todo={todo} />}
          />
        </Suspense>
      </main>
    </React.Fragment>
  );
};

export default TodoPages;
