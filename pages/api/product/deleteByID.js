import ProductModel from "../../../models/product";

const handler = async (req, res) => {
	if (req.method !== "DELETE") {
		return res.send({
			message: `${req.method} is not supported on this route.`,
		});
	}
	const _id = req.body._id;
	let response = await ProductModel.findByIdAndDelete(_id);
	res.send(response);
};

// delete product #3.
export default handler;
