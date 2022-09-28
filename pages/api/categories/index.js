import dbConnect from "../../../lib/mongodbConnect";
import CategoryModel from "../../../models/category";

const handler = async (req, res) => {
	await dbConnect();
	let data = await CategoryModel.find();
	res.send(data);
};

export default handler;
