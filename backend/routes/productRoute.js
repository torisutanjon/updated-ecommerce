import express from "express";
import { productController } from "../controller/index.js";
import { imageStore } from "../utils/index.js";

const router = express.Router();
router.post("/get-products-info", productController.getProductInfo);
router.post("/get-product-list", productController.getProductsList);
router.post(
  "/sell-product",
  imageStore.createLocalImageDir().array("files"),
  // upload.array("files"),
  productController.addProduct
);

export default router;
