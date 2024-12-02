import React, { useEffect, useState } from "react";
import axios from "axios";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

const App = () => {
  const [toDos, settoDos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/toDos").then((res) => settoDos(res.data));
  }, []);

  const addtoDo = (title) => {
    axios
      .post("http://localhost:5000/toDos", { title })
      .then((res) => settoDos((prev) => [...prev, res.data]));
  };

  const deletetoDo = (id) => {
    axios.delete(`http://localhost:5000/toDos/${id}`).then(() => {
      settoDos((prev) => prev.filter((toDo) => toDo.id !== id));
    });
  };

  const updatetoDo = (id, updates) => {
    axios.put(`http://localhost:5000/toDos/${id}`, updates).then(() => {
      settoDos((prev) =>
        prev.map((toDo) => (toDo.id === id ? { ...toDo, ...updates } : toDo))
      );
    });
  };

  return (
    <div>
      <h1>toDo Manager</h1>
      <ToDoForm onAdd={addtoDo} />
      <ToDoList toDos={toDos} onDelete={deletetoDo} onUpdate={updatetoDo} />
    </div>
  );
};

export default App;
