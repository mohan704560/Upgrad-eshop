const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require("express");
const eshop_user = require("./models/usersSchema");
const eshop = require("./models/productsSchema");
const eshop_order = require("./models/ordersSchema");
const eshop_shopping_address = require("./models/addressesSchema");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Auth = require("./middleware/auth");
const cookieParser = require("cookie-parser");

mongoose
  .connect(
    "mongodb+srv://mohanprajapati0203:mohan@cluster0.fxilea9.mongodb.net/eshop?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch((e) => {
    console.log(e.message);
  });

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const hashing = async (password) => {
  return await bcrypt.hash(password, 8);
};

const createToken = (email) => {
  return jwt.sign({ email: email }, "987654321123456789");
};

app.post("/users", async (req, res) => {
  const formData = req.body;

  formData.password = await hashing(formData.password);

  const savedEmail = await eshop_user.findOne({ email: formData.email });

  var email = formData.email;
  var contact_number = formData.phone_number;

  if (savedEmail) {
    res.status(400).json({
      success: false,
      Response: "Try any other email, this email is already registered",
    });
  } else if (
    email.indexOf("@") < 1 ||
    email.indexOf(".") < 3 ||
    email.length - 1 - email.indexOf(".") < 2 ||
    email.length - 1 - email.indexOf(".") > 5
  ) {
    res
      .status(400)
      .json({ success: false, Response: "Invalid email-id format!" });
  } else if (contact_number.toString().length !== 10) {
    res
      .status(400)
      .json({ success: false, Response: "Invalid contact number!" });
  } else {
    const userDetail = await eshop_user.create(formData);
    res.status(200).json({
      success: true,
      Response: "You have been successfully registered!",
    });
    console.log(userDetail);
  }
});

app.post("/auth", async (req, res) => {
  const SignINDetail = req.body;
  const data = await eshop_user.findOne({ email: SignINDetail.email });

  if (!data) {
    res.status(401).json({
      success: false,
      Response: "This email has not been registered!",
    });
  } else {
    const passwordCompare = await bcrypt.compare(
      SignINDetail.password,
      data.password
    );

    if (!passwordCompare) {
      res.status(401).json({ success: false, Response: "Invalid Credentials" });
    } else {
      res.cookie(
        "ehop",
        {
          Token: createToken(SignINDetail.email),
        },
        { expire: Date.now() + 3600000 }
      );
      res.status(200).send({
        success: true,
        response: "Authorise to use web application",
        data: data,
      });
    }
  }
});

app.get("/auth", Auth, async (req, res) => {
  try {
    const token = req.cookies.ehop;
    const varifyUser = jwt.verify(token.Token, "987654321123456789");
    const userDetail = await eshop_user.findOne({ email: varifyUser.email });
    res.status(200).send({
      success: true,
      Response: "you are authorised",
      data: userDetail,
    });
  } catch (err) {
    res.status(401).send({ success: false, Response: "Login required" });
  }
});

app.post("/addresses", Auth, async (req, res) => {
  const addressDetail = req.body;
  const AddZipcode = addressDetail.zipcode;
  const AddPhone = addressDetail.phone;

  if (AddZipcode.toString().length !== 6 || !parseInt(AddZipcode)) {
    res.status(400).json({ success: false, Response: "Invalid zip code!" });
  } else if (AddPhone.toString().length !== 10 || !parseInt(AddPhone)) {
    res
      .status(400)
      .json({ success: false, Response: "Invalid contact number!" });
  } else {
    const address = await eshop_shopping_address.create(addressDetail);
    const token = req.cookies.ehop;
    const varifyUser = jwt.verify(token.Token, "987654321123456789");
    const userDetail = await eshop_user.findOne({ email: varifyUser.email });
    address.user_id = userDetail._id;
    address.save();
    res.status(200).send({ success: true, Response: address });
  }
  0;
});

app.get("/products", async (req, res) => {
  const data = req.query;
  const searchString = `${data.catagory}+${data.SortBy}`;

  if (!data.name) {
    switch (searchString) {
      case "ALL+Default":
        products = await eshop.find();
        break;
      case "ALL+PriceDesending":
        products = await eshop.find().sort({ price: -1 });
        break;
      case "ALL+PriceAscending":
        products = await eshop.find().sort({ price: 1 });
        break;
      case "ALL+Newest":
        products = await eshop.find().sort({ created: 1 });
        break;
      case "Apparel+Default":
        products = await eshop.find({ catagory: "Apparel" });
        break;
      case "Apparel+PriceDesending":
        products = await eshop
          .find({ catagory: "Apparel" })
          .sort({ price: -1 });
        break;
      case "Apparel+PriceAscending":
        products = await eshop.find({ catagory: "Apparel" }).sort({ price: 1 });
        break;
      case "Apparel+Newest":
        products = await eshop
          .find({ catagory: "Apparel" })
          .sort({ created: 1 });
        break;
      case "Electronic+Default":
        products = await eshop.find({ catagory: "Electronic" });
        break;
      case "Electronic+PriceDesending":
        products = await eshop
          .find({ catagory: "Electronic" })
          .sort({ price: -1 });
        break;
      case "Electronic+PriceAscending":
        products = await eshop
          .find({ catagory: "Electronic" })
          .sort({ price: 1 });
        break;
      case "Electronic+Newest":
        products = await eshop
          .find({ catagory: "Electronic" })
          .sort({ created: 1 });
        break;
      case "Personal Care+Default":
        products = await eshop.find({ catagory: "Personal Care" });
        break;
      case "Personal Care+PriceDesending":
        products = await eshop
          .find({ catagory: "Personal Care" })
          .sort({ price: -1 });
        break;
      case "Personal Care+PriceAscending":
        products = await eshop
          .find({ catagory: "Personal Care" })
          .sort({ price: 1 });
        break;
      case "Personal Care+Newest":
        products = await eshop
          .find({ catagory: "Personal Care" })
          .sort({ created: 1 });
        break;

        Default: products = [];
    }
  } else {
    products = await eshop.find({ name: data.name });
  }

  res.status(200).json(products);
});

app.get("/products/categories", (req, res) => {
  const catagory = ["ALL", "Apparel", "Electronic", "Personal Care"];
  res.status(200).json({ success: true, Response: catagory });
});

app.get("/products/:id", async (req, res) => {
  try {
    const product = await eshop.findOne({ _id: req.params.id });
    res.status(200).send({ success: true, Response: product });
  } catch (err) {
    res.status(400).send({
      success: false,
      Response: `No Product found for ID - ${req.params}`,
    });
  }
});

app.post("/products", Auth, async (req, res) => {
  const product = req.body;
  const token = req.cookies.ehop;
  const varifyUser = jwt.verify(token.Token, "987654321123456789");
  const userDetail = await eshop_user.findOne({ email: varifyUser.email });

  if (userDetail.role === "Admin") {
    const newProduct = await eshop.create(product);
    res
      .status(200)
      .json({ success: true, Response: "Product Added successfully" });
  } else {
    res.status(401).json({
      success: false,
      Response: "You are not authorized to access this endpoint",
    });
  }
});

app.put("/products/:id", Auth, async (req, res) => {
  const product = req.body;
  const ID = req.params.id;
  const token = req.cookies.ehop;
  const varifyUser = jwt.verify(token.Token, "987654321123456789");
  const userDetail = await eshop_user.findOne({ email: varifyUser.email });

  if (userDetail.role === "Admin") {
    const newProduct = await eshop.updateOne({ _id: ID }, product);
    res
      .status(200)
      .json({ success: true, Response: "Product updated successfully" });
  } else {
    res.status(401).json({
      success: false,
      Response: "You are not authorized to access this endpoint",
    });
  }
});

app.delete("/products/:id", Auth, async (req, res) => {
  const ID = req.params.id;
  const token = req.cookies.ehop;
  const varifyUser = jwt.verify(token.Token, "987654321123456789");
  const userDetail = await eshop_user.findOne({ email: varifyUser.email });

  if (userDetail.role === "Admin") {
    const newProduct = await eshop.deleteOne({ _id: ID });
    res.status(200).json({
      success: true,
      Response: `Product with ${ID} Deleted successfully!`,
    });
  } else {
    res.status(401).json({
      success: false,
      Response: "You are not authorized to access this endpoint",
    });
  }
});

app.post("/orders", Auth, async (req, res) => {
  const Data = req.body;
  const token = req.cookies.ehop;
  const varifyUser = jwt.verify(token.Token, "987654321123456789");
  const userDetail = await eshop_user.findOne({ email: varifyUser.email });
  const OrderDetail = { ...Data, user_id: userDetail._id };

  if (varifyUser) {
    if (userDetail.role === "USER") {
      const newProduct = await eshop_order.create(OrderDetail);
      res.status(200).json({
        success: true,
        Response: `Order place successfully with id ${newProduct._id}`,
      });
    } else {
      res.status(401).json({
        success: false,
        Response: "You are not authorized to access this endpoint",
      });
    }
  } else {
    res.status(401).json({
      success: false,
      Response: "Please login first to access this endpoint",
    });
  }
});

app.get("/logout", (req, res) => {
  res.clearCookie("ehop");
  res
    .status(200)
    .json({ success: true, Response: "You are successfully logout" });
});

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to Eshop Backend</h1>");
});

app.listen(5000, () => {
  console.log("Server is running in port 5000");
});
