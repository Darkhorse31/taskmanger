import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Task.css";
import TaskDisplay from "../../taskDisplay/taskDisplay";

const Task = () => {
  const [Data, setData] = useState("");
  const [AllData, setAllData] = useState([]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/tasks/", {
        name: Data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const newData = async () => {
      try {
        const alltask = await axios.get("/tasks");
        const { data } = alltask;
        setAllData(data);
      } catch (error) {
        console.log(error);
      }
    };
    newData();
  });

  return (
    <div className="task">
      <div className="TaskmanagerWrapper">
        <h4 className="heading">Task Manager</h4>
        <form className="taskform" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter the Today Task"
            value={Data}
            onChange={(e) => setData(e.target.value)}
          />
          <button type="submit">Set</button>
        </form>
      </div>
      <div className="All_task">
        {AllData.map((taskData) => {
          return <TaskDisplay Task={taskData} />;
        })}
      </div>
    </div>
  );
};

export default Task;
