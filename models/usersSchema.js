const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    created:{
        type:Date,
        default:Date.now,
    },
    email:String,
    first_name:String,
    last_name:String,
    password:String,
    phone_number:Number,
    role:{
        type:String,
        default:"USER",
    },
    updated:{
        type:Date,
        default:Date.now,
    },
    user_name:String,
})

module.exports=mongoose.model('eshop_user',userSchema);