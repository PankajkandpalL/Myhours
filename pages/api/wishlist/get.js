import dbConnect from "../../../lib/mongodbConnect";
import User from "../../../models/User";
import jwt from 'jsonwebtoken'

export default async function handler(req,res){

    if (req.method !== "GET") {
        return res.status(403).send({
            message: `${req.method} is not supported on this route`,
        });
    }   

    let { token } = req.headers

    console.log("token is", token)

    try{
            await dbConnect();
            console.log("Connected!!")
            let verify = jwt.verify(token, "ACCESSSECRET1234");
            console.log(verify)
            if (verify) {
              console.log("verified")
              let decode = jwt.decode(token);
              console.log("Decdedd is", decode)
              let data = await User.findById(decode.id).populate("wishlist")
              console.log("data is", data)
              return res.send(data) 
            }
        return res.status(401).send("Missing Token")
    }
    catch (e) {
        res.status(500).send("Internal Server Error");
    }

}