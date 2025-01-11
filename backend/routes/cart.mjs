// cart routes:
// GET, POST, PUT, DELETE
// - GET for retrieving cart info, POST for adding to cart, PUT for modifying cart contents, DELETE for removing
// from cart

import express from "express";
const router = express.Router();
import entryController from "../controllers/cart.mjs";

//seed initial data - normally seeded based on user creation
router.get("/seed", entryController.seed);

//get items in cart
router.get("/", entryController.getItems);

//add to cart
router.post("/", entryController.addToCart);

//add to cart
router.put("/", entryController.changeCartItem);

//add to cart
router.delete("/:id", entryController.removeFromCart);

export default router;
