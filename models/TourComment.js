const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class TourComment extends Model { }

TourComment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tour_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tours",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "tour_comments",
  }
);
module.exports = TourComment;
