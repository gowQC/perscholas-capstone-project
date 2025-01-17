import mongoose from "mongoose";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 6;

const userSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true, //removes white spaces
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      minLength: 4,
      required: true,
    },
    cart: {
      // product names will serve as the fields for/be appended to an empty object
      type: Object,
      default: {},
    },
    addressInfo: {
      // will contain fields for address, state, city, and zip
      type: Object,
      default: {},
    },
    paymentInfo: {
      // will contain fields for cardNumber, holderName, CVV, and expirationDate
      type: Object,
      default: {},
    },
    order: {
      // will store successful orders with dates of confirmed orders being the fields, which would point to objects containing cart contents
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        //make it so we don't send the password back to the front end, but it will still be in the db
        delete ret.password;
        return ret;
      },
    },
  }
);

userSchema.pre("save", async function (next) {
  // 'this' is the user doc
  if (!this.isModified("password")) return next();
  // if the password has changed, we need to udate the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS); // the thing we want to hash, and how many hash rounds as the arguments
  return next();
});

export default mongoose.model("User", userSchema);
