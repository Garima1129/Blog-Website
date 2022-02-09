const mongoose = require("mongoose");
const quoteSchema = mongoose.Schema(
    {
        author: {
            type: String,
            trim: true,
        },
        text:{
            type: String,
            trim: true,
        },
    },
    { timestamps: true }
);
const quote =   mongoose.model('quote', quoteSchema,'Quotes');
module.exports = quote;
