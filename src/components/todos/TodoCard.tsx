import { Todo } from "@/app/(authenticated)/todos/page";
import React from "react";

const TodoCard = ({ todo }: { todo: Todo }) => {
  return (
    <React.Fragment>
      <p
        className={todo.completed ? "text-green-600" : "text-red-600"}
        key={todo?.id}
      >
        {todo?.todo}
      </p>
    </React.Fragment>
  );
};

export default TodoCard;
