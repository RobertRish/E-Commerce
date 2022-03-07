const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// Creates the Category model
class Category extends Model {
  // set up method to run on instance data (per user) to check password
  // checkPassword(loginPw) {
  //   return bcrypt.compareSync(loginPw, this.password);
  // }
}

// create fields/columns for Category model
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  // {
  //   hooks: {
  //     // set up beforeCreate lifecycle "hook" functionality
  //     async beforeCreate(newUserData) {
  //       newUserData.password = await bcrypt.hash(newUserData.password, 10);
  //       return newUserData;
  //     },
// 
  //     async beforeUpdate(updatedUserData) {
  //       updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
  //       return updatedUserData;
  //     }
    {
     sequelize,
     timestamps: false,
     freezeTableName: true,
     underscored: true,
     modelName: 'category'
   }
);

module.exports = Category;