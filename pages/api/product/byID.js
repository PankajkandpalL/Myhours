import ProductModel from "../../../models/product";

const handler = async (req, res) => {
	if (req.method !== "GET") {
		return res.status(403).send({
			message: `${req.method} is not supported on this route`,
		});
	}
	let { _id } = req.query;
	if (!_id) {
		return res.status(404).send({
			message: `id is missing in params`,
		});
	}
	let product = await ProductModel.findById(_id);
	res.status(200).send(product);
};

export default handler;
