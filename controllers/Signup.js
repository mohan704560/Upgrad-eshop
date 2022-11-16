const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require("express");
const eshop_user = require("../models/usersSchema");
const eshop = require("../models/productsSchema");
const eshop_order = require("../models/ordersSchema");
const eshop_shopping_address = require("../models/addressesSchema")
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Auth = require('../middleware/auth');
const cookieParser = require('cookie-parser');

mongoose.connect("mongodb://localhost:27017/eshop", () => { console.log("connected to db") });

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// const AddData=()=>{
//   UserData.map((user)=>{
//     eshop_shopping_address.create(user);
//   })};

//   AddData();

const hashing = async (password) => {
  return await bcrypt.hash(password, 8);
}

const createToken = (email) => {
  return jwt.sign({ email: email }, "987654321123456789");
}

app.post("/users", async (req, res) => {

  const formData = req.body;

  formData.password = await hashing(formData.password);

  const savedEmail = await eshop_user.findOne({ email: formData.email });

  var email = formData.email;
  var contact_number = formData.phone_number;

  if (savedEmail) {
    res.status(400).json({ success: false, Response: "Try any other email, this email is already registered" });
  }
  else if (email.indexOf("@") < 1 || email.indexOf(".") < 3 || (email.length - 1 - email.indexOf(".")) < 2 || (email.length - 1 - email.indexOf(".")) > 5) {
    res.status(400).json({ success: false, Response: "Invalid email-id format!" });
  }
  else if (contact_number.toString().length < 10) {
    res.status(400).json({ success: false, Response: "Invalid contact number!" });
  }
  else {
    const userDetail = await eshop_user.create(formData);
    res.status(200).json({ success: true, Response: "You have been successfully registered!" });
    console.log(userDetail);
  }

});

app.post("/auth", async (req, res) => {

  const SignINDetail = req.body;
  const data = await eshop_user.findOne({ email: SignINDetail.email });

  if (!data) {
    res.status(401).json({ success: false, Response: "This eamil has not been registered!" });
  }
  else {

    const passwordCompare = await bcrypt.compare(SignINDetail.password, data.password);

    if (!passwordCompare) {
      res.status(401).json({ success: false, Response: "Invalid Credentials" });
    }
    else {
      res.cookie("ehop", {
        Token: createToken(req.body.email),
        expire: new Date(Date.now() + 3600000),
      })
      res.status(200).send({ success: true, response: "Authorise to use web application" });
      console.log(req.body);
    }
  }
})

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../routes/DeleteForm.html"));
});

app.listen(5000, () => {
  console.log("Server is running in port 5000");
});
