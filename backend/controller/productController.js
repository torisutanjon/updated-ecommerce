import { PRODUCT_MODEL } from "../model/Items.js";
import { USER_ACCOUNT_MODEL } from "../model/Account.js";
import { imageStore } from "../utils/index.js";

export default {
  addProduct: async (req, res) => {
    try {
      let productUrls = [];

      //access the acount from the database
      await USER_ACCOUNT_MODEL.findOne({
        _id: req.body.userID,
      }).then(async (user) => {
        if (!user) return console.error("No user found error");

        //upload the images into the firebase storage and get the urls
        const urls = await imageStore.uploadImageToFirebase(req.files);

        const createdProduct = await PRODUCT_MODEL.create({
          productname: req.body.productName,
          productvariations: req.body.productVariations,
          productquantity: req.body.productQuantity,
          productprice: req.body.productPrice,
          productimages: [...urls],
        });

        await USER_ACCOUNT_MODEL.updateOne(
          { _id: user._id },
          { $push: { sellingProducts: createdProduct._id } }
        );

        res.status(201).send({ message: "Product Created" });
      });
    } catch (error) {
      console.error(error);
    }
  },
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
  getProductInfo: async (req, res) => {
    let productsInfo = [];
    await USER_ACCOUNT_MODEL.findOne({
      _id: req.body.id,
    })
      .then(async (user) => {
        if (!user) res.status(404).send({ message: "No user found" });
        for (const id of req.body.productIDs) {
          await PRODUCT_MODEL.findOne({ _id: id }).then((item) => {
            if (!item) {
              console.log("Item not found");
            } else {
              productsInfo.push(item);
            }
          });
        }
        res.status(200).send({ productsInfo: productsInfo });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
