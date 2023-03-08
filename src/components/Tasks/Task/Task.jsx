import React, { useState } from "react";

export const Task = ({ task }) => {
  const [doneStatus, setDoneStatus] = useState(true);

  const handleClick = () => {
    setDoneStatus(!doneStatus);
    task.isDone = doneStatus;
  }

  return (
    <div>
      <div className="taskCard" key={task.id}>
        <span className="taskCheckbox">
          <input
            className="checkbox-round"
            type="checkbox"
            checked={task.isDone}
            onChange={handleClick}
          />
        </span>
        <div>
          <h2>{task.title}</h2>
          <span>{task.description}</span>
        </div>
      </div>
    </div>
  );
};
