const app = require("./src/app");
const { sequelize } = require("./src/models");

sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("App is up");
  });
});
