//dependencies
import Cookies from "universal-cookie";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { USER_ACCOUNT_MODEL } from "../model/Account.js";

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

        console.log(decoded);
        //if no error check if user exists
        await USER_ACCOUNT_MODEL.findOne({
          _id: decoded.id,
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

export const getUserInfo = async (req, res) => {
  await USER_ACCOUNT_MODEL.findOne({
    _id: req.body._id,
  }).then((user) => {
    if (!user)
      return res
        .status(404)
        .send({ message: `Account with ID ${req.body._id} was not found.` });

    const userInfo = {
      name: {
        firstname: user.name.firstname,
        lastname: user.name.lastname,
      },
      username: user.username,
      email: user.email,
    };

    return res.status(200).send({ user: userInfo });
  });
};

export const checkPassword = async (req, res) => {
  try {
    await USER_ACCOUNT_MODEL.findOne({
      _id: req.body._id,
    })
      .then(async (user) => {
        if (!(await bcrypt.compare(req.body.password, user.password)))
          return res.status(401).send({ message: "Invalid Password" });

        return res.status(200).send({ status: true });
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req, res) => {
  if (req.body.password === "") {
    await USER_ACCOUNT_MODEL.findByIdAndUpdate(
      {
        _id: req.body._id,
      },
      {
        name: {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
        },
        username: req.body.username,
        email: req.body.email,
      }
    )
      .then(() => {
        return res
          .status(204)
          .send({ message: "Account Updated Successfully" });
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    await USER_ACCOUNT_MODEL.findByIdAndUpdate(
      {
        _id: req.body._id,
      },
      {
        name: {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
        },
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      }
    )
      .then(() => {
        return res
          .status(204)
          .send({ message: "Account Updated Successfully" });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
