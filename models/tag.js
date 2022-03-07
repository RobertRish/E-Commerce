const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class Tag extends Model {}
// create fields/columns for Post model
Tag.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      tag_name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'tag'
    }
  );

  module.exports = Tag;