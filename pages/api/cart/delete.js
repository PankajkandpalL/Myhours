import CartModel from "../../../models/cart";
import jwt from "jsonwebtoken";
import User from "../../../models/User";
import dbConnect from "../../../lib/mongodbConnect";

const handler = async (req, res) => {
  if (req.method !== "DELETE") {
    return res.send({
      message: `${req.method} is not supported on this route.`,
    });
  }

  const { id } = req.body;

  const accessToken = req.headers.token;

  try {
    await dbConnect();

    let verification = jwt.verify(accessToken, "ACCESSSECRET1234");

    if (verification) {
      let decode = jwt.decode(accessToken);
      await User.findByIdAndUpdate(decode.id, { $pull: { cartData: id } });
      await CartModel.findByIdAndDelete(id);
      return res.status(201).send("DELETED");
    }

    return res.status(401).send("Token Expired");
  } catch (e) {}
};
export default handler;
