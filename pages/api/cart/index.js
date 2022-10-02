import CartModel from "../../../models/cart";
import dbConnect from "../../../lib/mongodbConnect";
import jwt from "jsonwebtoken";
import User from "../../../models/User";

const handler = async (req, res) => {
  if (req.method !== "GET") {
    res.send({
      message: `${req.method} is not supported on this route`,
    });
  }

  let { token } = req.headers;

  try {

    await dbConnect();
    let verify = jwt.verify(token, "ACCESSSECRET1234");
    if (verify) {
      
      let decode = jwt.decode(token);
      let data = await User.findOne({ _id: decode.id }).select({ _id: 0, mobile: 0, addresses: 0, __v: 0, email: 0 })
      res.status(201).send({ cart: data })

    }

    return res.status(401).send("Unauthorized or Token Expired.");
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }
};

export default handler;
