import React from "react";

function TaskBox({ task }) {
  return (
    <div className="task-box">
      <h2>{task.title}</h2>
      <h3>{task.body}</h3>
      <p>{task.createdAt}</p>
    </div>
  );
}

export default TaskBox;
