//dependencies
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { conn } from "./config/db_config.js";

import loginRoute from "./routes/loginroute.js";
import registerRoute from "./routes/registerRoute.js";
import userRoute from "./routes/userRoute.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set routes
app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/get-user", userRoute);

//use env file
dotenv.config();

app.listen(PORT, (err) => {
  //if error occured throw error and get out of function
  if (err)
    return console.log(`Cannot listen to port: ${PORT} with error: ${err}`);
  //else print connected
  console.log(`Connected to port: ${PORT}`);
  //connect to database after server is runnings
  conn();
});
