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

    console.log("Verify", verify);

    if (verify) {
      let decode = jwt.decode(token);

      await User.findByIdAndUpdate(decode.id, { $pull: { cartData: id } });
      await CartModel.findByIdAndUpdate(id, { $set: { quantity: quan } });
      await User.findByIdAndUpdate(decode.id, { $push: { cartData: id } });
      let data = await User.findById(decode.id)
        .select({ mobile: 0, addresses: 0, __v: 0, email: 0 })
        .populate("cartData");

      return res.status(201).send({ updatedCart: data });
    }
    return res.status(401).send("Token Expired");
  } catch (e) {
    res.status(501).send({ message: "Internal error" });
  }
};

export default handler;
