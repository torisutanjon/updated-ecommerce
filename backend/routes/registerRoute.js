//dependencies
import express from "express";

//controllers
import { registerPost } from "../controller/registerController.js";

const router = express.Router();

router.post("/", registerPost);

export default router;

//controllers
