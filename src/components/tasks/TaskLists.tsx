"use client";

import React, { ReactNode } from "react";

const TaskLists = ({
  tasks,
  renderComponent,
}: {
  tasks: any[];
  renderComponent: (item: any) => ReactNode;
}) => {
  console.log({ tasks });

  return (
    <React.Fragment>
      <main className="w-full max-w-xl ">
        {/* <pre>{tasks && JSON.stringify(tasks, null, 2)}</pre> */}
        {tasks &&
          Array.isArray(tasks) &&
          tasks?.map((task) => renderComponent(task))}
      </main>
    </React.Fragment>
  );
};

export default TaskLists;
