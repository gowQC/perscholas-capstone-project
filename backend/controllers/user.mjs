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

// PUT - modify existing cart
async function updateCart(req, res) {
  // if query param is found, field deletion - remove an item from cart
  if (req.query.field) {
    try {
      const foundUser = await User.findById(req.params.id);
      const newCart = foundUser.cart;
      console.log(newCart);
      delete newCart[req.query.field];
      console.log(newCart);
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.id },
        { cart: newCart },
        { new: true }
      );
      res
        .status(200)
        .send(
          `Removed ${req.query.field} field from user ${updatedUser.fname} ${updatedUser.lname}'s cart.`
        );
    } catch (error) {
      res.status(400).json(error);
    }
  } else {
    // add to cart/update existing product within cart
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
        .send(
          `Updated cart for user ${updatedUser.fname} ${updatedUser.lname}.`
        );
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

// PUT - successful order = empty current cart, establish addressInfo, establish paymentInfo, add new field to orders with cart info
async function completeOrder(req, res) {
  try {
    // console logs
    // console.log(req.body.addressInfo);
    // console.log(req.body.paymentInfo);
    // console.log(req.body.orderedCart);

    const foundUser = await User.findById(req.params.id);
    // set variables
    const orderDate = req.body.orderedCart.date; // grab date
    // retrieve the ordered items + remove date since we're using it as a field, not a piece of data
    const orderedProducts = req.body.orderedCart;
    delete orderedProducts.date;

    const updates = {
      cart: {},
      addressInfo: req.body.addressInfo,
      paymentInfo: req.body.paymentInfo,
      orders: { ...foundUser.orders, [orderDate]: orderedProducts },
    };

    // update info
    // console.log(updates);
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: updates },
      { new: true }
    );
    // console.log(User);
    res
      .status(200)
      .send(
        `Completed order for user ${updatedUser.fname} ${updatedUser.lname}.`
      );
  } catch (error) {
    res.status(400).send("OOps error somewhewre");
  }
}

export default { create, login, updateCart, getCart, completeOrder };

// for user ${updatedUser.fname} ${updatedUser.lname}.
