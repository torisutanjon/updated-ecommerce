//dependencies
import mongoose from "mongoose";

const USER_ACCOUNT_SCHEMA = new mongoose.Schema(
  {
    name: {
      firstname: {
        type: String,
        required: false,
      },
      lastname: {
        type: String,
        required: false,
      },
    },
    username: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    contactnumber: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    emailverified: {
      type: Boolean,
      required: true,
    },
    verificationToken: {
      type: String,
      required: false,
      default: null,
    },
    sellingProducts: {
      type: [mongoose.SchemaTypes.ObjectId],
      required: false,
    },
  },
  { collection: "useraccounts" }
);

export const USER_ACCOUNT_MODEL = mongoose.model(
  "useraccounts",
  USER_ACCOUNT_SCHEMA
);
