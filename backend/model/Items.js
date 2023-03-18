//dependencies
import mongoose from "mongoose";

const PRODUCT_SCHEMA = new mongoose.Schema(
  {
    owner: {
      id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
    productname: {
      type: String,
      required: true,
    },
    productvariations: [
      {
        type: String,
        required: true,
      },
    ],
    productquantity: {
      type: String,
      required: true,
    },
    productprice: {
      type: String,
      required: true,
    },
    productimages: [
      {
        type: String,
        required: true,
      },
    ],
  },
  { collation: "products" }
);

export const PRODUCT_MODEL = mongoose.model("products", PRODUCT_SCHEMA);
