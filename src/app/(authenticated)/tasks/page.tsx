import TaskLists from "@/components/tasks/TaskLists";
import React, { Suspense } from "react";

const TasksPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen bg-green-50 p-2">
        <Suspense
          fallback={<p className="text-red-600 text-xl">Loading . . . </p>}
        >
          <TaskLists />
        </Suspense>
      </main>
    </React.Fragment>
  );
};

export default TasksPage;
