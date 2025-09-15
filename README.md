# Your_mood_backEnd

##Stored data:
array of objects:
{
  "name": "Sleep 8 hours",
  "desc": "Your goal is to sleep minimum 8 hours all week",
  "status": "false"
}

##API requests:
GET - to get all tasks on start
POST - to add new tsks from form.
PATCH - to change state of the task
DELETE - to delete task

How to start express project?
1. npm init -y
2. npm install express
3. npm install --save-dev nodemon
4. starter file:
```javascript
import express from "express"; // if using ES modules, set "type": "module" in package.json
// const express = require("express"); // if using CommonJS

const app = express();
const PORT = 3000;

app.use(express.json()); // parse JSON body

// Simple route
app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

```
5. In pakcage.json --> "scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}



