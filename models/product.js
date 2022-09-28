import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
	createdAt: { type: Date, default: Date.now() },
	productName: String,
	category: { type: Schema.Types.ObjectId, ref: "category" },
	oldPrice: Number,
	newPrice: Number,
	hasColor: Boolean,
	colors: [String],
	imagesByColor: [
		{
			color: String,
			images: [String],
		},
	],
	generalImages: [String],
	poster: String,
	description: [String],
	ingredients: [String],
	howToUse: [String],
	commonlyAskedQuestions: [
		{
			Q: String,
			A: String,
		},
	],
	reviews: [String],
	availableOffers: [{ offerCode: String, discount: Number }],
	isTrending: Boolean,
	sellCount: Number,
});

const ProductModel = models.product || model("product", ProductSchema);

export default ProductModel;
