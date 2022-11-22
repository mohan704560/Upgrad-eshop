const mongoose = require("mongoose");
const addressesSchema = require("./addressesSchema");
const usersSchema = require("./usersSchema");
const productsSchema = require("./productsSchema");

const ordersSchema = new mongoose.Schema({
    quatity:Number,
    order_date:{
        type:Date,
        default:Date.now,
    },
    product_product_id:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"productsSchema",
    },
    shipping_address_id:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"addressesSchema",
    },
    user_id:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"usersSchema",
    }
})

module.exports = mongoose.model("eshop_order" , ordersSchema);