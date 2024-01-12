const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Tour extends Model { }

Tour.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    host_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
    
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "tours",
  }
);

module.exports = Tour;