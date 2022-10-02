import { model, models, Schema } from "mongoose";

const cartSchema = new Schema({

	productName: {type : String, required : true},
	price: {type :Number, required : true},
    poster : { type: String, required : true },
    variant : { type : String, default : "Pink" },
    quantity : { type : Number, default : 1 },
    inCart : { type : Boolean, default : true }

})

const CartModel = models.cart || model('cart', cartSchema)

export default CartModel