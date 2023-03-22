import express from "express";
import { productController } from "../controller/index.js";

const router = express.Router();

router.post("/get-products-info", productController.getProductInfo);
router.post("/get-product-list", productController.getProductsList);
router.post("/sell-product", productController.addProduct);

export default router;
