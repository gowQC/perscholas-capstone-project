import User from "../models/user.mjs";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// create a new user
async function create(req, res) {
  try {
    // add user to database
    const createdUser = await User.create(req.body);
    // create JWT token - will be a string
    const token = createJWT(createdUser);
    res.status(200).json(token);
  } catch (error) {
    res.status(400).json(error);
  }
}

// log in an existing user
async function login(req, res) {
  try {
    // search database for user based on email
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error("User not found.");
    // if we find the user, compare the password
    // password is encrypted - 1st arg is from the credentials user typed, 2nd arg is what is stored in db
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error("Bad password");
    const token = createJWT(user);
    res.json(token);
  } catch (error) {
    res.status(400).json(error);
  }
}

// helper function for login and create
function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}

// GET - gets users current cart
async function getCart(req, res) {
  try {
    // find user to access their cart + return it
    const foundUser = await User.findById(req.params.id);
    res.status(200).json(foundUser.cart);
  } catch (error) {
    res.status(400).json(error);
  }
}

// PUT - add to cart (modify existing empty cart)
async function updateCart(req, res) {
  try {
    // the name of the product will be a new/updated field in the cart object
    const field = req.body.name;
    delete req.body.name;
    const foundUser = await User.findById(req.params.id);
    const newCart = foundUser.cart;
    newCart[field] = req.body;
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.id },
      { cart: newCart },
      { new: true }
    );
    res
      .status(200)
      .send(`Updated cart for user ${updatedUser.fname} ${updatedUser.lname}.`);
  } catch (error) {
    res.status(400).json(error);
  }
}

export default { create, login, updateCart, getCart };
