import { PRODUCT_MODEL } from "../model/Items.js";
import { USER_ACCOUNT_MODEL } from "../model/Account.js";

export default {
  addItem: async (req, res) => {
    console.log(req.body);
    await USER_ACCOUNT_MODEL.findOne({
      _id: req.body.userID,
    }).then(async (user) => {
      if (!user)
        return res.status(404).send({ message: "User Not Found Error" });

      await PRODUCT_MODEL.create({
        owner: {
          id: user._id,
          name: `${user.name.firstname} ${user.name.lastname}`,
        },
        productname: req.body.productName,
        productvariations: req.body.productVariations,
        productquantity: req.body.productQuantity,
        productprice: req.body.productPrice,
        productimages: req.body.productImages,
      });
      res
        .status(201)
        .send({ message: "Item created, check My Products to view." });
    });
  },
};
