import { PRODUCT_MODEL } from "../model/Items.js";
import { USER_ACCOUNT_MODEL } from "../model/Account.js";

export default {
  getProductsList: async (req, res) => {
    await USER_ACCOUNT_MODEL.findOne({
      _id: req.body.id,
    })
      .then((user) => {
        if (!user)
          return res.status(404).send({ message: "User not found error." });
        res.status(200).send({ sellingProducts: user.sellingProducts });
      })
      .catch((err) => {
        console.log(err);
      });
  },

  addProduct: async (req, res) => {
    await USER_ACCOUNT_MODEL.findOne({
      _id: req.body.userID,
    }).then(async (user) => {
      if (!user)
        return res.status(404).send({ message: "User Not Found Error" });

      PRODUCT_MODEL.create(
        {
          owner: {
            id: user._id,
            name: `${user.name.firstname} ${user.name.lastname}`,
          },
          productname: req.body.productName,
          productvariations: req.body.productVariations,
          productquantity: req.body.productQuantity,
          productprice: req.body.productPrice,
          productimages: req.body.productImages,
        },
        async (err, product) => {
          if (err) return console.log(err);
          await USER_ACCOUNT_MODEL.updateOne(
            { _id: user._id },
            { $push: { sellingProducts: product._id } }
          );
        }
      );

      res
        .status(201)
        .send({ message: "Item created, check My Products to view." });
    });
  },
};
