import React from "react";

function TaskList({ tasks, deleteTask, updateTask }) {
  const toggleComplete = (task) => {
    task.completed = !task.completed;
    updateTask(task);
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id} style={{ textDecoration: task.completed ? "line-through" : "" }}>
          <span>{task.text}</span>
          <button onClick={() => toggleComplete(task)}>
            {task.completed ? "Unmark" : "Complete"}
          </button>
          <button onClick={() => deleteTask(task._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
