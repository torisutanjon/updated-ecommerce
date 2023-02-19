import { OAuth2Client } from "google-auth-library";
import { USER_ACCOUNT_MODEL } from "../model/Account.js";
import jwt from "jsonwebtoken";

const verifyGoogleToken = async (credential) => {
  try {
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    return { payload: ticket.getPayload() };
  } catch (error) {
    console.log(error);
    return { message: "Invalid User" };
  }
};

export const signUp = async (req, res) => {
  try {
    if (!req.body.credential)
      return res.status(404).send({ message: "No Credentials Found" });
    const verifyToken = await verifyGoogleToken(req.body.credential);
    if (verifyToken.error)
      return res.status(400).send({ message: verifyToken.error });

    const profile = verifyToken.payload;

    console.log(profile);
    await USER_ACCOUNT_MODEL.findOne({
      email: profile.email,
    })
      .then(async (user) => {
        //a user was found with an email same as the profile.email
        if (user) {
          return res
            .status(409)
            .send({ message: "Email was already used by another account." });
        }

        await USER_ACCOUNT_MODEL.create({
          name: {
            firstname: profile.given_name,
            lastname: profile.family_name,
          },
          username: profile.email,
          email: profile.email,
        })
          .then(() => {
            return res
              .status(201)
              .send({ message: "Account Created Successfully" });
          })
          .catch((err) => {
            return res.status(500).send({ message: err });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred. Registration failed.",
    });
  }
};

export const signIn = async (req, res) => {
  try {
    if (!req.body.credential)
      return res.status(404).send({
        error: "No Credentials Found",
      });

    const verifyToken = await verifyGoogleToken(req.body.credential);
    if (verifyToken.error)
      return res.status(400).send({ message: verifyToken.error });

    const profile = verifyToken.payload;

    await USER_ACCOUNT_MODEL.findOne({
      email: profile.email,
    }).then((user) => {
      if (!user)
        return res
          .status(400)
          .send({ message: "No Account Found! Please register first." });

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
    });
  } catch (error) {
    return res.status(500).send({
      message: "An error occured. Registration failed.",
    });
  }
};
