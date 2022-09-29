import dbConnect from "../../../lib/mongodbConnect";
import CategoryModel from "../../../models/category";
import ProductModel from "../../../models/product";

const handler = async (req, res) => {
	// console.log(req);
	// return res.send(req.params);
	if (req.method !== "GET") {
		return res.status(403).send({
			message: `${req.method} is not supported on this route`,
		});
	}
	let {category} = req.query;
	// res.send({category});
	if (!category) {
		return res.status(404).send({
			message: "Category is missing in body",
		});
	}
	try {
		await dbConnect();
		let categoryData = await CategoryModel.findOne({
			category: category.toLowerCase(),
		});
		let productsData = await ProductModel.find({ category: categoryData._id });
		res.send(productsData);
	} catch (err) {
		res.send({
			message: err,
		});
	}
};

export default handler;
