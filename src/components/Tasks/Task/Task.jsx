import React from "react";

export const Task = ({ task }) => {
  return (
    <div>
      <div className="taskCard" key={task.id}>
        <span className="taskCheckbox">
          {/* TODO: Сделать checked onChange, иначе чекбокс будет readonly*/}
          <input
            className="checkbox-round"
            type="checkbox"
            checked={task.isDone}
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
