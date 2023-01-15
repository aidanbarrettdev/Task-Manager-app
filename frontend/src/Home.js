import { useEffect } from "react";
import TaskBox from "./components/TaskBox";
import TaskForm from "./components/TaskForm";
import { getTasks } from "./features/taskReducer";
import { useDispatch, useSelector } from "react-redux";
import "./styles/home.css";
function Home() {
  const dispatch = useDispatch();
  const tasksState = useSelector((state) => state.tasks);
  const { tasks } = tasksState;
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);
  return (
    <div className="home">
      <div className="container">
        {tasks && tasks.map((task) => <TaskBox key={task._id} task={task} />)}
      </div>
      <div className="form-container">
        <TaskForm></TaskForm>
      </div>
    </div>
  );
}

export default Home;
