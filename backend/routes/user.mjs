import express from "express";
const router = express.Router();
import controller from "../controllers/user.mjs";

// get user's active cart
router.get("/:id", controller.getCart);

// modify (add or subtract from) user's cart
router.put("/:id", controller.updateCart);

// create user
router.post("/", controller.create);

// login existing user
router.post("/login", controller.login);

export default router;

// user routes:
// POST
// - POST for creating account, but need to determine if other http methods should be used

// future implementation: DELETE
