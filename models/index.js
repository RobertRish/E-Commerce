// define associations
const Category = require('./Category');
const Product = require("./Product");
const ProductTag = require("./ProductTag");
const Tag = require("./Tag");

// create associations
Category.hasMany(Product, {
    foreignKey: 'category_id'
  });

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'product_id',
  foreignKey: 'product_id'
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'product_id',
  foreignKey: 'tag_id'
});

module.exports = { Category, Product, ProductTag, Tag };