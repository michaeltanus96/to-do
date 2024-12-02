import React from "react";

const ToDoList = ({ toDos, onDelete, onUpdate }) => {
  return (
    <div>
      <h2>To Dos</h2>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id} data-cy={`toDo-item-${toDo.id}`}>
            <input
              type="checkbox"
              checked={toDo.completed}
              onChange={() => onUpdate(toDo.id, { completed: !toDo.completed })}
              data-cy='Checkbox'
            />
            <span>{toDo.title}</span>
            <button onClick={() => onDelete(toDo.id)} data-cy='Delete'>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
