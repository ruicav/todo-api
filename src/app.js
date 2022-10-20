var express = require("express");
var app = express();

app.use(express.json());

const usersRouter = require("./routes/users.routes");
const authRouter = require("./routes/auth.routes");
const projectsRouter = require("./routes/projects.routes");
const taskRouter = require("./routes/tasks.routes");

app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/projects", projectsRouter);
app.use("/tasks", taskRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

module.exports = app;
