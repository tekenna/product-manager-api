const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    } ,
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {timestamps: true})

const product = mongoose.model("Product", ProductSchema)
module.exports = product
