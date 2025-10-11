import NewTask from "@/components/tasks/NewTask";
import React from "react";

const CreateTaskPage = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center">
        <NewTask />
      </main>
    </React.Fragment>
  );
};

export default CreateTaskPage;
