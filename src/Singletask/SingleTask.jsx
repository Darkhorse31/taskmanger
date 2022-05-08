import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./SingleTask.css";
const SingleTask = () => {
  const Navigate=useNavigate();
  const [complete, setcomplete] = useState(false);
  const [New, setNew] = useState("");
  const { id } = useParams();
  console.log(complete);
  const handleUpdateClick = async (event) => {
    event.preventDefault();
    await axios.patch(`/tasks/${id}`, {
      name: New,    
      completed:complete
    });
    setTimeout(() => {
     Navigate("/")
    }, 1000);
  };
  return (
    <div className="SingleTask">
      <div className="singletaskWrapper">
        <h3 className="Edittask">Edit Task</h3>
        <form className="taskForm" onSubmit={handleUpdateClick}>
          <div className="task_item">
            <lable>TaskID:</lable>
            <h3>{id}</h3>
          </div>
          <div className="task_item">
            <lable>Update Item</lable>
            <input
              type="text"
              placeholder="Update Task"
              value={New}
              onChange={(e) => setNew(e.target.value)}
            ></input>
          </div>
          <div className="task_item">
            <h3>Completed</h3>{" "}
            <input
              type={"checkbox"}
              onClick={(e) => {
                if (complete === false) {
                  setcomplete(true);
                } else {
                  setcomplete(false);
                }
              }}
            ></input>
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleTask;
