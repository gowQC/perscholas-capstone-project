import express from "express";
const router = express.Router();
import controller from "../controllers/product.mjs";

// product routes:
// GET, PUT
// - GET is for retrieving, PUT is for updating size quantities as users interact with site
// - POST and DELETE not needed, as on the consumer's end these actions will not be occuring

//seed initial data - FOR DEVELOPMENT PURPOSES ONLY
router.get("/seed", controller.seed);

//page gets items to display
router.get("/", controller.getProducts);

//user input modifies things like quantity
// router.put("/", controller.editProduct);

export default router;
