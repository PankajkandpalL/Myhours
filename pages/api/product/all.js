import dbConnect from "../../../lib/mongodbConnect";
import ProductModel from "../../../models/product";

const handler = async (req, res) => {
	if (req.method !== "GET") {
		return res.status(403).send({
			message: `${req.method} is not supported on this route`,
		});
	}
	try {
		await dbConnect();
		let products = await ProductModel.find();
		res.status(200).send({
			products,
		});
	} catch (err) {
		res.send({
			message: err.message,
		});
	}
};

export default handler;
