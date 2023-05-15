import React, { useState } from "react";
import { KanbanContext } from "./kanbanContext";
import { BoardApp } from "./components/BoardApp";

export const MainApp = () => {
  const initialTask = [
    {
      id: Math.floor((1 + Math.random()) * 0x10000),
      taskDescription: "Task 1",
      status: 1,
    },
    {
      id: Math.floor((1 + Math.random()) * 0x10000),
      taskDescription: "Task 2",
      status: 1,
    },
    {
      id: Math.floor((1 + Math.random()) * 0x10000),
      taskDescription: "Task 3",
      status: 1,
    },
  ];

  const [tasks, setTasks] = useState(initialTask);
  return (
    <KanbanContext.Provider value={{ tasks, setTasks }}>
      <BoardApp />
    </KanbanContext.Provider>
  );
};
