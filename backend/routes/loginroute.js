//dependencies
import express from "express";

//controllers
import {
  loginPageGet,
  loginPagePost,
  getUser,
} from "../controller/logincontroller.js";

const router = express.Router();

router.get("/", loginPageGet);
router.post("/", loginPagePost);
router.get("/get-user", getUser);

export default router;
