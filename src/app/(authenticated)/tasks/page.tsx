"use client";

import TaskLists from "@/components/tasks/TaskLists";
import React from "react";
import { getTasksQueryOption } from "@/lib/react-query-options/tasks/getTasksQueryOption";
import { useQuery } from "@tanstack/react-query";
import TaskCard from "@/components/tasks/TaskCard";

const TasksPage = () => {
  const { data, error } = useQuery({
    ...getTasksQueryOption(),
    staleTime: 3000,
  });

  if (error) return <> {error?.message}</>;
  return (
    <React.Fragment>
      <main className="w-full min-h-screen bg-green-50 p-2">
        <TaskLists
          tasks={data?.tasks}
          renderComponent={(task) => <TaskCard key={task.id} {...task} />}
        />
      </main>
    </React.Fragment>
  );
};

export default TasksPage;
