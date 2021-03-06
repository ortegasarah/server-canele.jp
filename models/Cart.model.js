const { Schema, model } = require("mongoose");

const cartSchema =  new Schema({
    total: {
        type: Number,
        required:true
    },
    _client: {
        type:Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    items: {
        type: [{
            product: Schema.Types.ObjectId,
            quantity: Number
    }],
        min: 1
    }
}, {timestamps: true})

module.exports = model("Cart", cartSchema);
