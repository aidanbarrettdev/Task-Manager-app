import { useEffect } from "react";
import { useState } from "react";
import TaskBox from "./components/TaskBox";
import TaskForm from "./components/TaskForm";
import { getTasks } from "./features/taskReducer";
import { useDispatch, useSelector } from "react-redux";
import "./styles/home.css";
function Home() {
  const [task, setTask] = useState({
    title: "",
    body: "",
  });
  const dispatch = useDispatch();
  const tasksState = useSelector((state) => state.tasks);
  const { tasks } = tasksState; //need this so i can map in return

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);
  return (
    <div className="home">
      <div className="container">
        {tasksState.isLoading && <p>pending...</p>}
        {tasks &&
          tasks.map((task) => (
            <TaskBox key={task._id} task={task} setTask={setTask} />
          ))}
      </div>
      <div className="form-container">
        <TaskForm task={task} setTask={setTask}></TaskForm>
      </div>
    </div>
  );
}

export default Home;
