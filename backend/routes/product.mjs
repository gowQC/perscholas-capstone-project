// product routes:
// GET, PUT
// - GET is for retrieving, PUT is for updating quantities as users interact with site
// - POST and DELETE not needed, as on the consumer's end these actions will not be occuring

import express from "express";
const router = express.Router();
import entryController from "../controllers/product.mjs";

//seed initial data
router.get("/seed", entryController.seed);

//page gets items to display
router.get("/", entryController.getProducts);

//user input modifies things like quantity
router.put("/", entryController.changeProduct);

export default router;
