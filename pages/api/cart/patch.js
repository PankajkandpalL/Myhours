import CartModel from "../../../models/cart";
import User from "../../../models/User";
import jwt from "jsonwebtoken";
import dbConnect from "../../../lib/mongodbConnect";

const handler = async(req,res)=>{
    if (req.method !== "PATCH") {
		return res.send({
			message: `${req.method} is not supported on this route.`,
		});
	}
    const id=req.params.id;
    const token= req.headers
    try{

        await dbConnect();
        
        let verify = jwt.verify( token , "ACCESSSECRET1234" )
        
        if(verify){
            let decode = jwt.decode(token)

            await CartModel.findByIdAndUpdate( id , req.body, { new: true } )
    
            return res.send.status(201).send("OK")
        }
        return res.status(401).send("Token Expired")
    }
    catch(e){
    res.sataus(501).send({message:"Inernal error"})
    }

}

export default handler;