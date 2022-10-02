import CartModel from "../../../models/cart";
import jwt from "jsonwebtoken";
import User from "../../../models/User";
import dbConnect from "../../../lib/mongodbConnect";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.send({
      message: `${req.method} is not supported on this route.`,
    });
  }

  let { productName, newPrice, poster } = req.body 

  let accessToken = req.headers.token;

  try {
    await dbConnect();

    let verify = jwt.verify(accessToken, "ACCESSSECRET1234");

    if (verify) {
      let decode = jwt.decode(accessToken);

      let pId = await CartModel.create({ productName, poster, price : newPrice, quantity : 1 });

      await User.findByIdAndUpdate(decode.id, { $push: { cartData: pId._id } });

      return res.status(201).send("Added to Cart Successfully!", { cart : pId });
    }
    return res.status(401).send("Token Expired");
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }
};

export default handler;
