import React, { useState, useEffect } from "react";
import axios from "axios";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "./styles/App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the backend
    axios.get("/api/tasks").then((response) => {
      setTasks(response.data);
    });
  }, []);

  const addTask = (task) => {
    axios.post("/api/tasks", task).then((response) => {
      setTasks([...tasks, response.data]);
    });
  };

  const deleteTask = (id) => {
    axios.delete(`/api/tasks/${id}`).then(() => {
      setTasks(tasks.filter((task) => task._id !== id));
    });
  };

  const updateTask = (updatedTask) => {
    axios.put(`/api/tasks/${updatedTask._id}`, updatedTask).then(() => {
      setTasks(
        tasks.map((task) =>
          task._id === updatedTask._id ? updatedTask : task
        )
      );
    });
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  );
}

export default App;
