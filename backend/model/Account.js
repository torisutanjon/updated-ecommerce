//dependencies
import mongoose from "mongoose";

const USER_ACCOUNT_SCHEMA = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { collection: "useraccounts" }
);

export const USER_ACCOUNT_MODEL = mongoose.model(
  "useraccounts",
  USER_ACCOUNT_SCHEMA
);
