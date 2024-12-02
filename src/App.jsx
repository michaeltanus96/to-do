import React, { useEffect, useState } from "react";
import axios from "axios";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

const App = () => {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    axios.get("https://to-do-1-h8ke.onrender.com").then((res) => setToDos(res.data));
  }, []);

  const addToDo = (title) => {
    axios
      .post("http://localhost:5000/toDos", { title })
      .then((res) => setToDos((prev) => [...prev, res.data]));
  };

  const deleteToDo = (id) => {
    axios.delete(`http://localhost:5000/toDos/${id}`).then(() => {
      setToDos((prev) => prev.filter((toDo) => toDo.id !== id));
    });
  };

  const updateToDo = (id, updates) => {
    axios.put(`http://localhost:5000/toDos/${id}`, updates).then(() => {
      setToDos((prev) =>
        prev.map((toDo) => (toDo.id === id ? { ...toDo, ...updates } : toDo))
      );
    });
  };

  return (
    <div>
      <h1>ToDo App</h1>
      <ToDoForm onAdd={addToDo} />
      <ToDoList toDos={toDos} onDelete={deleteToDo} onUpdate={updateToDo} />
    </div>
  );
};

export default App;
