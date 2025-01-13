// cart routes:
// GET, POST, PUT, DELETE
// - GET for retrieving cart info, POST for adding to cart, PUT for modifying cart contents, DELETE for removing
// from cart

import express from "express";
const router = express.Router();
import controller from "../controllers/cart.mjs";

//seed initial data - normally seeded based on user creation
router.get("/seed", controller.seed);

//get items in cart
router.get("/", controller.getItems);

//add to cart
router.post("/", controller.addToCart);

//add to cart
router.put("/", controller.changeCartItem);

//add to cart
router.delete("/:id", controller.removeFromCart);

export default router;
