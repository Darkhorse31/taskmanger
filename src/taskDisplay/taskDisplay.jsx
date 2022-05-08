import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./displaytask.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import axios from "axios";
const styleCom={
  color:"green"
  
}
const TaskDisplay = ({ Task }) => {
  const Navigate = useNavigate();
  return (
    <div className="TaskDisplay">
      <div className="taskwrapper">
        <div className="icon">
          <IconButton
            onClick={async () => {
              Navigate(`/edit/${Task._id}`);
              
            }}
          >
            
            <EditIcon className="edit" />
          </IconButton>
          <IconButton
            onClick={async () => {
              await axios.delete(`/tasks/${Task._id}`);
            }}
          >
            <DeleteIcon className="delete" />
          </IconButton>
        </div>
        <h4 className="taskname" style={Task.completed==true?styleCom:null}>{Task.name}</h4>
        <h6 className="date">{Task.Date}</h6>
      </div>
    </div>
  );
};

export default TaskDisplay;
