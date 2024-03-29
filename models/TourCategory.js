const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');


class TourCategory extends Model { }

TourCategory.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        tour_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tours',
                key: 'id'
            }
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'categories',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tour_categories',
    }
);

module.exports = TourCategory;
