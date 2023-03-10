//depepdencies
import express from "express";

//controllers
import {
  getUser,
  getUserInfo,
  checkPassword,
  updateUser,
  verifyEmail,
  confirmVerification,
} from "../controller/userController.js";

const router = express.Router();

router.get("/", getUser);
router.post("/", getUserInfo);
router.post("/check-password", checkPassword);
router.put("/update-user", updateUser);
router.post("/verify-email", verifyEmail);
router.post("/confirm-verification", confirmVerification);

export default router;
