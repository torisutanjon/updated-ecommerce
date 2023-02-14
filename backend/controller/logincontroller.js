import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Cookies from "universal-cookie";
import { USER_ACCOUNT_MODEL } from "../model/Account.js";

export const loginPagePost = async (req, res) => {
  await USER_ACCOUNT_MODEL.findOne({
    email: req.body.email,
  })
    .then(async (user) => {
      if (!user)
        return res.status(401).send({ message: "Invalid Email or Password" });

      if (!(await bcrypt.compare(req.body.password, user.password)))
        return res.status(401).send({ message: "Invalid Email or Password" });

      const token = jwt.sign(
        {
          id: user._id,
          username: user.username,
          email: user.email,
        },
        process.env.SECRET_KEY,
        { expiresIn: "1d" }
      );

      res.status(200).send({ token: token, message: "Logged In Successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Internal Server Error");
    });
};
