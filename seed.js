// 2. Fix API routes to not have module project code (all models need C,R,U, and D routes)
// like your MySQL username, password, and database name.
// delete this file
// delete fantastic umbrella


const Sequelize = require('sequelize');
const { Category } = require('./models/Category');
const { Product } = require('./models/Product');
const { Tag } = require('./models/Tag');

// CATEGORY SEED
const Electronics = await Category.create(
    { 
        category_name: "Electronics",
    });
// What is 'await'?

// PRODUCT SEED
const Wii = await Product.create(
    { 
        product_name: "Wii",
        price: "199.99",
        stock: "100",
        category_id: "1"
    });

// TAG SEED
const videoGames = await Tag.create(
    { 
        tag_name: "Video Games"
    });


    module.exports = seed;

