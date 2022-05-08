import React from "react";
import "./App.css";
import Task from "../src/container/Task manager/Task";
import TaskDisplay from "./taskDisplay/taskDisplay";
import SingleTask from "./Singletask/SingleTask";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Task />}></Route>
        <Route path="/edit/:id" element={<SingleTask />}></Route>
      </Routes>
    </div>
  );
};

export default App;
