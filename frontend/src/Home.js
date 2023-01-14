import { useState, useEffect } from "react";
import TaskBox from "./components/TaskBox";
import TaskForm from "./components/TaskForm";
import "./styles/home.css";
function Home() {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("api/tasks");
      const json = await response.json();

      if (response.ok) {
        setTasks(json);
      }
    };
    fetchTasks();
  }, []);
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
