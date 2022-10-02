import CartModel from "../../../models/cart";
import User from "../../../models/User";
import jwt from "jsonwebtoken";
import dbConnect from "../../../lib/mongodbConnect";

const handler = async (req, res) => {
  if (req.method !== "PATCH") {
    return res.send({
      message: `${req.method} is not supported on this route.`,
    });
  }

  const { id, quan } = req.body;

  const { token } = req.headers;

  try {
    await dbConnect();

    let verify = jwt.verify(token, "ACCESSSECRET1234");

    if (verify) {
      
      let decode = jwt.decode(token);

      let data = await User.updateOne({ _id : decode.id, "cartData._id" : id }, { $set : { "cartData.$.quantity" : quan } })
      console.log(data)

      res.send("Updated!")
      
    }
    return res.status(401).send("Token Expired");
  } catch (e) {
    res.status(501).send({ message: "Internal error" });
  }
};

export default handler;
