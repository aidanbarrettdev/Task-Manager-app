import { useEffect } from "react";
import "../styles/taskBox.css";
import { getTasks, deleteTask } from "../features/taskReducer";
import { useDispatch, useSelector } from "react-redux";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
function TaskBox({ setTask }) {
  const dispatch = useDispatch();
  const tasksState = useSelector((state) => state.tasks);
  const { tasks } = tasksState; // map in return

  const handleDelete = (_id) => {
    dispatch(deleteTask(_id));
  };

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <div className="task-box-container">
      {tasksState.isLoading && <p>pending...</p>}
      {tasks &&
        tasks.map((task) => (
          <div key={task._id} className="task-box">
            <h2>{task.title}</h2>
            <h4>{task.body}</h4>
            <p>
              {formatDistanceToNow(new Date(task.createdAt), {
                addSuffix: true,
              })}
            </p>

            <button
              className="material-symbols-outlined"
              onClick={() => handleDelete(task._id)}
            >
              delete
            </button>
          </div>
        ))}
    </div>
  );
}

export default TaskBox;
