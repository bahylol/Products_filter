const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    description: {
        type: String,
    },

    category: {
        type: String,
        required: true,
    },

    brand: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
        default: 0,
        min: 0
    },

});


// Define the models
const productModel = mongoose.model("product", productSchema);

// Export the models
module.exports = {
    productModel,
}