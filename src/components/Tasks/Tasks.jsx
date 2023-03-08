import React, { useState } from "react";
import { Task } from "./Task/Task";
import "./Tasks.css";

export const Tasks = ({ tasks, currentDayIndex }) => {
  const [changedTask, setChangedTask] = useState();

  return (
    <div>
      <h1 className="tasks-block-header">Текущие задачи</h1>
      {tasks.map(
        (task, index) =>
          task.dayIndex === currentDayIndex &&
          !task.isDone && (
            <Task
              onCheckboxClick={() => {
                setChangedTask(index);
              }}
              task={task}
            />
          )
      )}
      <h1 className="tasks-block-header">Выполненные задачи</h1>
      {tasks.map(
        (task, index) =>
          task.dayIndex === currentDayIndex &&
          task.isDone && (
            <Task
              onCheckboxClick={() => {
                setChangedTask(index);
              }}
              task={task}
            />
          )
      )}
    </div>
  );
};
