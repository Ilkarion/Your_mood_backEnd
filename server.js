import e from "express";
import { todos } from "./starterArray.js";
import cors from "cors"

const app = e();
const PORT = 1234;

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://your-mood-five.vercel.app",
    ],
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(e.json());

let arrayTodo = todos;

app.get("/api/todos", (req, res) => {
  res.status(200).json(arrayTodo);
});


app.post("/api/todos/add", (req, res) => {
  const newTodo = {
    nameTask: req.body.name,  
    description: req.body.desc,
    status: req.body.status      
  };
  arrayTodo.push(newTodo);
  res.status(201).json(arrayTodo);
});

app.patch("/api/todos/change", (req, res) => {
    const nameTodo = req.body.name.toLowerCase()
    const newStatus = req.body.newStatus

    const task = arrayTodo.find((elem) => nameTodo === elem.nameTask)

    if(!task) res.status(404).json({"message": "Todo with this name not found"})
    
    task.status = newStatus
    console.log(task)
    res.status(200).json(arrayTodo)

})

app.delete("/api/todos/delete", (req, res) => {
  const nameTodo = req.body.name?.trim().toLowerCase();

  const index = arrayTodo.findIndex(
    (elem) => elem.nameTask.trim().toLowerCase() === nameTodo
  );
  if (index === -1) {
    return res.status(404).json({
      message: "Todo with this name not found",
    });
  }
  arrayTodo.splice(index, 1); // удаляем задачу
  res.status(200).json(arrayTodo);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
