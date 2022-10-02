import dbConnect from "../../../lib/mongodbConnect";
import User from "../../../models/User";

export default async function handler(req,res){

    if (req.method !== "GET") {
        return res.status(403).send({
            message: `${req.method} is not supported on this route`,
        });
    }   

    let { token } = req.headers

    try{
        if(token)
        {
            await dbConnect();
            let verify = jwt.verify(token, "ACCESSSECRET1234");
            if (verify) {
              let decode = jwt.decode(token);
              let data = await User.findById(decode.id).populate("wishlist")
              res.send(data) 
            }
        }
        return res.status(401).send("Missing Token")
    }
    catch (e) {
        res.status(500).send("Internal Server Error");
    }

}