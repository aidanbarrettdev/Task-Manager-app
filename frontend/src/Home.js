import { useState } from "react";
import TaskBox from "./components/TaskBox";
import TaskForm from "./components/TaskForm";

import "./styles/home.css";
function Home() {
  const [task, setTask] = useState({
    title: "",
    body: "",
  });

  return (
    <div className="home">
      <div className="container">
        <TaskBox setTask={setTask}></TaskBox>
      </div>
      <div className="form-container">
        <TaskForm task={task} setTask={setTask}></TaskForm>
      </div>
    </div>
  );
}

export default Home;
