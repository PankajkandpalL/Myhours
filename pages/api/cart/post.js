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

      let old = await User.findOne({ "cartData.productName" : productName })

      if(old)
      {
        return res.send("Already In the cart!")
      }

      await User.findByIdAndUpdate(decode.id, { $push : { cartData : { productName :productName , price : newPrice, poster:poster, quantity : 1 } } })

      res.status(200).send("added to Cart!")
    }
    return res.status(401).send("Token Expired");
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }
};

export default handler;
