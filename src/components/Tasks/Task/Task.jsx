import React from "react";
import './Task.css'

export const Task = ({ task, onCheckboxClick }) => {
  const handleClick = () => {
    onCheckboxClick();
    task.isDone = !task.isDone;
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
