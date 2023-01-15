import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../features/taskReducer";
function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    body: "",
  });
  const dispatch = useDispatch();
  const taskState = useSelector((state) => state.tasks); //grabs state from the index js tasks:taskReducer
  console.log(taskState);
  const onSubmit = async (e) => {
    e.preventDefault();

    //dispatch
    dispatch(createTask(task));

    //reset form
    setTask({
      title: "",
      body: "",
    });
  };

  //
  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form">
          <h3>Create Task</h3>
          <label htmlFor="text">Title:</label>
          <input
            type="text"
            name="text"
            id="text"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
          <label htmlFor="text">Content:</label>
          <input
            type="text"
            name="text"
            id="text"
            value={task.body}
            onChange={(e) => setTask({ ...task, body: e.target.value })}
          />
        </div>
        <div className="form-btn-container">
          <button className="btn-submit" type="submit">
            {taskState.isLoading && <p>pending...</p>}+
          </button>
          {taskState.isError && <p>There has been an Error</p>}
          {taskState.isSuccess && <p>Task Added To List</p>}
        </div>
      </form>
    </section>
  );
}

export default TaskForm;
