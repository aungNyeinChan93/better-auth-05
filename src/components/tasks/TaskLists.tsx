"use client";

import { getTasksQueryOption } from "@/lib/react-query-options/tasks/getTasksQueryOption";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import React from "react";

const TaskLists = () => {
  const { data: tasks, error } = useSuspenseQuery({
    ...getTasksQueryOption(),
    staleTime: 3000,
  });

  if (error) return <> {error?.message}</>;
  return (
    <React.Fragment>
      <main className="w-full max-w-xl ">
        <pre>{tasks && JSON.stringify(tasks, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default TaskLists;
