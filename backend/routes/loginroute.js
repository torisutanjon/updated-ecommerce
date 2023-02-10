//dependencies
import express from "express";

//controllers
import { loginPageGet } from "../controller/logincontroller.js";

const router = express.Router();

router.get("/", loginPageGet);

export default router;
