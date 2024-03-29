const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Memos extends Model { }

Memos.init({
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
  user_id: {
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
    modelName: 'memos',
  }
);
module.exports = Memos;

