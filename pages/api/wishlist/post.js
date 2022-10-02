import jwt from "jsonwebtoken";
import dbConnect from "../../../lib/mongodbConnect";
import User from "../../../models/User";
import Wishlist from "../../../models/wishlist";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(403).send({
      message: `${req.method} is not supported on this route`,
    });
  }

  let { token } = req.headers;
  let { productName, newPrice, oldPrice, poster, ratings } = req.body;

  try {
    await dbConnect();
    let verify = jwt.verify(token, "ACCESSSECRET1234");
    if (verify) {
      let decode = jwt.decode(token);

      let data = await Wishlist.create({
        productName,
        newPrice,
        oldPrice,
        poster,
        ratings,
      });
      await User.findByIdAndUpdate(decode.id, {
        $push: { wishlist: data._id },
      });
      res.status(201).send("Added to Wishlist");
    }

    return res.status(401).send("Unauthorized or Token Expired.");
  } catch (e) {
    res.status(500).send("Internal Server Error");
  }
}
