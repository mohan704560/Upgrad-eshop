const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
    available_items:Number,
    catagory:String,
    created:{
        type:Date,
        default:Date.now,
    },
    description:String,
    inmage_url:String,
    manufacturer:String,
    name:String,
    price:mongoose.Schema.Types.Decimal128,
    updated:{
        type:Date,
        default:Date.now,
    }
});

module.exports = mongoose.model('eshop',productsSchema);