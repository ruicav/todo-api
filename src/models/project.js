const project = (sequelize, DataTypes) => {
  const Project = sequelize.define("Project", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
  });

  Project.associate = (models) => {
    Project.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        allowNull: false,
        as: "user",
      },
    });
    Project.hasMany(models.Task, {
      foreignKey: {
        name: "projectId",
        allowNull: false,
      },
      as: "tasks",
    });
  };
  return Project;
};

module.exports = project;
