import React from "react";

interface Props {
  id?: string;
  task?: string;
}

const TaskCard = ({ id, task }: Props) => {
  return (
    <React.Fragment>
      <div
        key={id}
        className="border border-gray-300 bg-white p-3 rounded-lg my-2 shadow-sm hover:shadow-md transition"
      >
        <h2 className="font-semibold text-lg text-gray-800">{task}</h2>
      </div>
    </React.Fragment>
  );
};

export default TaskCard;
