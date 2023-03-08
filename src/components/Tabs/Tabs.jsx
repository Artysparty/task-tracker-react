import React from "react";
import './Tabs.css';

export const Tabs = ({days, onTabClick, currentDayIndex}) => {
  return (
    <div className="tabsContainer">
      {days.map((day, index) => (
        <button
          className="dayButton"
          disabled={currentDayIndex === index}
          onClick={() => onTabClick(index)}
        >
          {day}
        </button>
      ))}
    </div>
  );
};
