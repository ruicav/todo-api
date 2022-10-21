const TASK_STATUS = require("../constants/taskStatus");

const task = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    description: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.ENUM, values: TASK_STATUS },
    doneAt: { type: DataTypes.DATE },
  });

  Task.associate = (models) => {
    Task.belongsTo(models.Project, {
      foreignKey: {
        name: "projectId",
        allowNull: false,
        as: "project",
      },
    });
  };

  return Task;
};

module.exports = task;
