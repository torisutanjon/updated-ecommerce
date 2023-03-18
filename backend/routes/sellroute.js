import express from "express";
import { sellController } from "../controller/index.js";

const router = express.Router();

router.post("/", sellController.addItem);

export default router;
