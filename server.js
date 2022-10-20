// (async () => {
//   const database = require("./db");
//   const db = require("./src/models");
//   const bcrypt = require("bcrypt");

//   try {
//     const syncResult = await database.sync();
//     const user = {
//       name: "Rui",
//       password: "123",
//       email: "r2cavaleiro@gmail.com",
//     };
//     const salt = await bcrypt.genSalt(3);
//     user.password = await bcrypt.hash(user.password, salt);
//     const createResult = await db.User.create(user);
//     const project = { name: "project1", userId: 1 };
//     const result = db.Project.create(project);
//     // console.log("project result", result);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// var express = require("express");
// const bodyParser = require("body-parser");
// var app = express();

// const usersRouter = require("./src/routes/users.routes");
// const authRouter = require("./src/routes/auth.routes");
// const projectsRouter = require("./src/routes/projects.routes");

// app.use("/users", usersRouter);
// app.use("/auth", authRouter);
// app.use("/projects", projectsRouter);

// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   console.error(err.message, err.stack);
//   res.status(statusCode).json({ message: err.message });

//   return;
// });

// app.listen(3000, function () {
//   console.log("App is up");
// });

////////

const app = require("./src/app");
const { sequelize } = require("./src/models");

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("App is up");
  });
});
