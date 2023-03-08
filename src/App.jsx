import React, { useState } from "react";

import './App.css';

import { Tabs } from "./components/Tabs/Tabs";
import { Tasks } from "./components/Tasks/Tasks";

import { tasks } from "./mockData/tasks";

export const App = () => {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  let days = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];

  return (
    <div>
      <Tabs
        days={days}
        onTabClick={setCurrentDayIndex}
        currentDayIndex={currentDayIndex}
      />

      <Tasks
        tasks={tasks}
        currentDayIndex={currentDayIndex}
      />
    </div>
  );
};
