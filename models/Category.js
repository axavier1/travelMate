const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Category extends Model { }

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // tour_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "tours",
    //     key: "id",
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "categories",
  }
);

module.exports = Category;
