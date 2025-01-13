// user routes:
// POST
// - POST for creating account, but need to determine if other http methods should be used

import express from "express";
const router = express.Router();
import controller from "../controllers/user.mjs";

export default router;
