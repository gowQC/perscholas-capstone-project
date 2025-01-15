import express from "express";
const router = express.Router();
import controller from "../controllers/user.mjs";

router.get("/", (req, res) => {
  res.status(200).send("im running");
});

router.post("/", controller.create);

router.post("/login", controller.login);

export default router;

// user routes:
// POST
// - POST for creating account, but need to determine if other http methods should be used

// future implementation: DELETE
