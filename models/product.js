const mongoose = require('mongoose');

let ProductSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    inStock: { type: Boolean, required: true }
})

const Product = mongoose.model("Product",ProductSchema);
module.exports = Product;
