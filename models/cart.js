import { model, models, Schema } from "mongoose";

const cartSchema = new Schema({

	productName: {type : String, required : true},
	price: {type :Number, required : true},
    poster : { type: String, required : true },
    quantity : { type : Number, default : 1 }

})


const CartModel = models.cart || model('cart', cartSchema)

export default CartModel