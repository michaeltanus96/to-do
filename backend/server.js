import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let tasks = [
  { id: 1, title: "First Task", completed: false },
  { id: 2, title: "Second Task", completed: true },
];

app.get("/tasks", (req, res) => res.json(tasks));
app.post("/tasks", (req, res) => {
  const { title } = req.body;
  const newTask = { id: Date.now(), title, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});
app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  tasks = tasks.map((task) =>
    task.id === parseInt(id) ? { ...task, title, completed } : task
  );
  res.json({ message: "Task updated" });
});
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter((task) => task.id !== parseInt(id));
  res.json({ message: "Task deleted" });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
