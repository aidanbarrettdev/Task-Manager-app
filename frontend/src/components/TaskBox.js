import React from "react";

function TaskBox({ task, setTask }) {
  return (
    <div className="task-box">
      <h2>{task.title}</h2>
      <h3>{task.body}</h3>
      <p>{task.createdAt}</p>
      <button className="update" onClick={() => setTask(task)}>
        UPDATE
      </button>
      <button className="delete">X</button>
    </div>
  );
}

export default TaskBox;
