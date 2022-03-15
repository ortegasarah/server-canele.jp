const { Schema, model } = require("mongoose");

const productSchema =  new Schema({
    name: {
        type: String,
        required: [true, "the product need a title"]
    },
    name_jp: {
        type: String,
        required: [true, "the product need a title"]
    },
       images: {
        type: [String],
        min:[1],
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
    description_jp: {
        type: String,
        required: [true, "the product need a description"]
    },
    flavors: {
            white: String,
			almond: String,
			roasted_green_tea: String,
			roasted_black_soy_flour: String,
			matcha_red_bean: String,
			brown_sugar_walnut: String
    },
    stock: {
        type: Number,
        min:[0, "the product need a minimum"]
    }
}, {timestamps: true})

module.exports = model("Product", productSchema);
