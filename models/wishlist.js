import { model, models, Schema } from "mongoose";

const wishlistSchema = new Schema({

	productName: {type : String, required : true},
	newPrice: {type :Number, required : true},
    oldPrice : { type : Number },
    poster : { type: String, required : true },
    ratings : { type : Number }

})


const Wishlist = models.wishlist || model('wishlist', wishlistSchema)

export default Wishlist