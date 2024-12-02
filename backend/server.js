import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-Memory Data (Temporary Storage)
let toDos = [
  { id: 1, title: "First ToDo", completed: false },
  { id: 2, title: "Second ToDo", completed: true },
];

// Routes

// Get all toDos
app.get("/toDos", (req, res) => {
  res.json(toDos);
});

// Add a new toDo
app.post("/toDos", (req, res) => {
  const { title } = req.body;
  const newToDo = { id: Date.now(), title, completed: false };
  toDos.push(newToDo);
  res.status(201).json(newToDo);
});

// Update a toDo
app.put("/toDos/:id", (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  toDos = toDos.map((toDo) =>
    toDo.id === parseInt(id) ? { ...toDo, title, completed } : toDo
  );
  res.json({ message: "ToDo updated" });
});

// Delete a toDo
app.delete("/toDos/:id", (req, res) => {
  const { id } = req.params;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(id));
  res.json({ message: "ToDo deleted" });
});

// Start the Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
