import CartModel from "../../../models/cart";

const handler = async(req,res)=>{
    if(req.method!=="DELETE"){
        return res.send({
            message:`${req.method} is not supported on this route.`
        });
    }
    const id=req.body._id;
    let response = await CartModel.findByIdAndDelete(id)
    res.send(response);
}
export default handler;