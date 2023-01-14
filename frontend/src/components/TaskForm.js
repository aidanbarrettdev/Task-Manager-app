import React from "react";
import { useState } from "react";
function TaskForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    const task = { title, body: content };

    const response = await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error); // update the error prop i made
    }
    if (response.ok) {
      setTitle("");
      setContent("");
      setError(null);
      console.log("task added", json);
    }
  };
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="text">Content:</label>
          <input
            type="text"
            name="text"
            id="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="form-btn-container">
          <button className="btn-submit" type="submit">
            {`+\n TASK`}
          </button>
        </div>
      </form>
    </section>
  );
}

export default TaskForm;
