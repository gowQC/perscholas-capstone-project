// Imports
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//Global configuration
const mongoURI = process.env.ATLAS_URI;
const db = mongoose.connection;

//
mongoose.connect(mongoURI);
mongoose.connection.once("open", () => {
  console.log("Connected to Mongo");
});

export default db;
