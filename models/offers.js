import { model, models, Schema } from "mongoose";

const OfferSchema = new Schema({
	offerCode: { type: String, unique: true },
	discount: Number,
	minCartValue: Number,
});

const OfferModel = models.offer || model("offer", OfferSchema);

export default OfferModel;
