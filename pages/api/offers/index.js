import dbConnect from "../../../lib/mongodbConnect";
import OfferModel from "../../../models/offers";

const handler = async (req, res) => {
	if (req.method !== "GET") {
		return res
			.status(403)
			.send({ message: `${req.method} is not allowed on this route` });
	}
	try {
		await dbConnect();
		let offers = await OfferModel.find();
		res.send(offers);
	} catch (err) {
		res.send({
			message: err.message,
		});
	}
};

export default handler;
