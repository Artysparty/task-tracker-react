import React from "react";
import { Task } from "./Task/Task";
import "./Tasks.css";

export const Tasks = ({ tasks, currentDayIndex }) => {
  return (
    <div>
      <h1 className="tasks-block-header">Текущие задачи</h1>
      {tasks.map(
        (task) =>
          task.dayIndex === currentDayIndex &&
          !task.isDone && (
            <Task task={task}/>
          )
      )}
      <h1 className="tasks-block-header">Выполненные задачи</h1>
      {tasks.map(
        (task) =>
          task.dayIndex === currentDayIndex &&
          task.isDone && (
            <Task task={task}/>
          )
      )}
    </div>
  );
};
