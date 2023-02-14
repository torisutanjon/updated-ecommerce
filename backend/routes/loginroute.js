//dependencies
import express from "express";

//controllers
import { loginPagePost } from "../controller/logincontroller.js";

const router = express.Router();

router.post("/", loginPagePost);

export default router;
