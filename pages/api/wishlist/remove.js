import Wishlist from "../../../models/wishlist";
import jwt from 'jsonwebtoken'
import dbConnect from "../../../lib/mongodbConnect";

export default async function handler(req,res) {

    if (req.method !== "GET") {
        return res.status(403).send({
            message: `${req.method} is not supported on this route`,
        });
    }  

    let { token } = req.headers;
    let { productName, newPrice, oldPrice, poster } = req.body;

    try{
        await dbConnect();
      
        let verify = jwt.verify(token, "ACCESSSECRET1234");
        
        if (verify) {
          let data = await Wishlist.findOne({ productName })
         
          return res.send({id : data._id}) 
        }
    return res.status(401).send("Missing Token")
}
catch (e) {
    res.status(500).send("Internal Server Error");
}

}