const { Schema, model } = require("mongoose");

const productSchema =  new Schema({
    title: {
        type: String,
        required: [true, "the product need a title"]
    },
    price: {
        type: Number,
        required: [true, "the product need a price"],
        min: [10, "minimun price is"]
    },
    description: {
        type: String,
        required: [true, "the product need a description"]
    },
    images: {
        type: [String],
        min:[1],

    },
    stock: {
        type: Number,
        min:[0, "the product need a minimum"]
    }
}, {timestamps: true})

module.exports = model("Product", productSchema);
