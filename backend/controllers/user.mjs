import User from "../models/user.mjs";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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

// helper function
function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}

export default { create, login };
