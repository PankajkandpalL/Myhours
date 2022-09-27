import dbConnect from "../../../lib/mongodbConnect";
import OfferModel from "../../../models/offers";

const handler = async (req, res) => {
	if (req.method !== "POST") {
		return res.status(401).send({
			message: `${req.method} not allowed in this route.`,
		});
	}
	let { offerCode, discount, minCartValue } = req.body;
	if (offerCode && discount) {
		try {
			await dbConnect();
			if (!minCartValue) minCartValue = 1;
			const newOffer = OfferModel({ offerCode, discount, minCartValue });
			await newOffer.save();
			res
				.status(201)
				.send({ message: "new offer added successfully", newOffer });
		} catch (err) {
			res.send({ message: err.message });
		}
	} else {
		res.send({
			message:
				"Offer Code and discount amount is required to create a new offer",
		});
	}
};

export default handler;
