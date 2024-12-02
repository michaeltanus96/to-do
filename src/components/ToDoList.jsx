import React from "react";

const ToDoList = ({ tasks, onDelete, onUpdate }) => {
  return (
    <div>
      <h2>ToDoList</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onUpdate(task.id, { completed: !task.completed })}
            />
            <span>{task.title}</span>
            <button onClick={() => onDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
