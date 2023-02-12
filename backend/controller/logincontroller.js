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

export const loginPageGet = (req, res) => {
  res.send("Login Route");
};

export const getUser = async (req, res) => {
  const cookies = new Cookies(req.headers.cookie);
  try {
    //verify the jwt
    jwt.verify(
      cookies.get("user"),
      process.env.SECRET_KEY,
      //jwt verify callback
      async (err, decoded) => {
        if (err) return console.log(err);

        //if no error check if user exists
        await USER_ACCOUNT_MODEL.findOne({
          username: decoded.username,
        })
          .then(async (user) => {
            //if not exists return false
            if (!user) return res.send({ status: false });

            //if exists create new token
            const token = jwt.sign(
              {
                id: user._id,
                username: user.username,
                email: user.email,
              },
              process.env.SECRET_KEY,
              { expiresIn: "1d" }
            );

            //return the data
            res.send({
              token: token,
              status: true,
              id: user._id,
              username: user.username,
            });
          })
          .catch((err) => console.log(err.message));
      }
    );
  } catch (error) {
    console.log(error);
  }
};
