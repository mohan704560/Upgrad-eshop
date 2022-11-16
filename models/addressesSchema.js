const mongoose = require("mongoose");
const usersSchema = require("./usersSchema");

const addressesSchema= new mongoose.Schema({
    city:String,
    landmark:String,
    name:String,
    phone:Number,
    state:String,
    street:String,
    zipcode:String,
    user_id:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"eshop_user",
    }
});

module.exports = mongoose.model("eshop_shopping_address",addressesSchema);