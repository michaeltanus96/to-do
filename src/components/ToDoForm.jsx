import React, { useState } from "react";

const ToDoForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new To Do"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        data-cy="ToDoInput"
      />
      <button type="submit" data-cy="Submit">Add</button>
    </form>
  );
};

export default ToDoForm;
