import { useEffect } from "react";

import { getTasks, deleteTask } from "../features/taskReducer";
import { useDispatch, useSelector } from "react-redux";

function TaskBox({ setTask }) {
  const dispatch = useDispatch();
  const tasksState = useSelector((state) => state.tasks);
  const { tasks } = tasksState; //need this so i can map in return

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  const handleDelete = (_id) => {
    dispatch(deleteTask(_id));
  };
  return (
    <div>
      {tasksState.isLoading && <p>pending...</p>}
      {tasks &&
        tasks.map((task) => (
          <div key={task._id} className="task-box">
            <h2>{task.title}</h2>
            <h3>{task.body}</h3>
            <p>{task.createdAt}</p>
            <button className="update" onClick={() => setTask(task)}>
              UPDATE
            </button>
            <button className="delete" onClick={() => handleDelete(task._id)}>
              X
            </button>
          </div>
        ))}
    </div>
  );
}

export default TaskBox;
