import CartModel from "../../../models/cart";

const handler=async(req,res)=>{
    if(req.method!=="GET"){
        res.send({
            message:`${req.method} is not supported on this route`
        })
    }
    let response= await CartModel.find()
    res.send(response);
}

export default handler;