import express from "express";
import dotenv from "dotenv";
import logger from "morgan";
dotenv.config();
import db from "./db/conn.mjs";
import cors from "cors";
// import routes
import productRoutes from "./routes/product.mjs";

const PORT = process.env.PORT || 5052;

const app = express();

// use middleware
app.use(cors()); // enables communication with backend from other sources
// app.use(logger("dev"));
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Default route.");
});

// use imported routes
app.use("/api/products", productRoutes);

app.get("/*", (req, res) => {
  console.log("Unknown route accessed. Redirecting...");
  res.redirect("/"); // redirect unknown routes to default route
});

// global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Issue with the server somewhere...");
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
