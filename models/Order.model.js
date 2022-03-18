const { Schema, model } = require("mongoose");

const orderSchema =  new Schema({
    total: {
        type: Number,
        required: true
    },
    _client: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    items: {
        type: [{
            product: {
                type: Schema.Types.ObjectId,
                ref: "Product",
            },
            quantity: Number,
        }],
        min: [1, "the order needs at least one products"]
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Waiting", "Approved", "Preparing your Order", "Your order is on its way!", "Delivered"],
        default: "Waiting",
    },
    method: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = model("Order", orderSchema);
