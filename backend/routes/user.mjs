import express from "express";
const router = express.Router();
import controller from "../controllers/user.mjs";

// create user
router.post("/", controller.create);

// get user's active cart
router.get("/:id", controller.getCart);

// modify (add or subtract from) user's cart
router.put("/:id", controller.updateCart);

// delete an existing user from db
router.delete("/:id", controller.deleteUser);

// login existing user
router.post("/login", controller.login);

// modify (add or subtract from) user's cart
router.put("/ORDER/:id", controller.completeOrder);

export default router;

// user routes:
// POST
// - POST for creating account, but need to determine if other http methods should be used

// future implementation: DELETE
