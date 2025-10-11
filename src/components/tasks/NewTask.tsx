"use client";

import { addTaskAction } from "@/features/tasks/tasks-actions";
import { useSession } from "@/lib/authClient";
import { useRouter } from "next/navigation";
import React, { useActionState } from "react";

const NewTask = () => {
  const router = useRouter();

  const [state, formAction] = useActionState(addTaskAction, undefined);

  const { data } = useSession();

  return (
    <React.Fragment>
      <form action={formAction}>
        <input type="hidden" name="user_id" value={data?.user.id!} />
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Enter Your Task"
        />
        <button type="submit">Add Task ➕ </button>
      </form>
    </React.Fragment>
  );
};

export default NewTask;
