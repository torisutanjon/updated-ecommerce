import bcrypt from "bcrypt";
import { USER_ACCOUNT_MODEL } from "../model/Account.js";

export const registerPost = async (req, res) => {
  if (
    await USER_ACCOUNT_MODEL.findOne({
      email: req.body.email,
    })
  )
    return res.status(409).send({ message: "Email Already In Use" });

  const salt = await bcrypt.genSalt(Number(process.env.SALT));
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  await USER_ACCOUNT_MODEL.create({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });

  res.status(201).send({ message: "Account Created Successfully" });
};
