import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../features/taskReducer";
import "../styles/taskForm.css";
function TaskForm({ task, setTask }) {
  const dispatch = useDispatch();
  const taskState = useSelector((state) => state.tasks); //grabs state from the index js tasks:taskReducer

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createTask(task));

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
          <h3>CREATE TASK</h3>
          <label htmlFor="text">Title:</label>
          <input
            type="text"
            name="text"
            id="text"
            value={task.title}
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
          <label htmlFor="text">Content:</label>
          <textarea
            rows="10"
            type="text"
            name="text"
            id="text"
            value={task.body}
            onChange={(e) => setTask({ ...task, body: e.target.value })}
          />
        </div>
        <div className="form-btn-container">
          <button className="btn-submit" type="submit">
            {taskState.isLoading && <p>pending...</p>}
            ADD TASK
          </button>
          {taskState.isError && (
            <p className="error">
              There has been an Error. Make sure to fill all the form fields
              before adding a task.
            </p>
          )}
          {taskState.isSuccess && (
            <p className="material-symbols-outlined">add_task</p>
          )}
        </div>
      </form>
    </section>
  );
}

export default TaskForm;
