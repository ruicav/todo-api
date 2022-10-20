const user = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
  });

  User.associate = (models) => {
    User.hasMany(models.Project, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
      as: "projects",
    });
  };

  return User;
};

module.exports = user;
