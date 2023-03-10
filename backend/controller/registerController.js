import bcrypt from "bcrypt";
import { USER_ACCOUNT_MODEL } from "../model/Account.js";

export const registerPost = async (req, res) => {
  console.log(req.body);
  if (
    await USER_ACCOUNT_MODEL.findOne({
      email: req.body.email,
    })
  )
    return res.status(409).send({ message: "Email Already In Use" });

  const salt = await bcrypt.genSalt(Number(process.env.SALT));
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  await USER_ACCOUNT_MODEL.create({
    name: {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    },
    username: req.body.username,
    email: req.body.email,
    contactnumber: req.body.contactnumber,
    password: hashedPassword,
    emailverified: req.body.emailverified,
  });

  res.status(201).send({ message: "Account Created Successfully" });
};
