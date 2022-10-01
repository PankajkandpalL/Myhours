import CartModel from "../../../models/cart";
import dbConnect from "../../../lib/mongodbConnect";

const handler=async(req,res)=>{
    if(req.method!=="GET"){
        res.send({
            message:`${req.method} is not supported on this route`
        })
    }
    
	await dbConnect();
    let response= await CartModel.find()
    res.send(response);
}

export default handler;