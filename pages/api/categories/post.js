import dbConnect from "../../../lib/mongodbConnect";
import CategoryModel from "../../../models/category";

const handler = async (req, res) => {
	const method = req.method;
	switch (method) {
		case "POST": {
			let data = req.body;
			// console.log({ data });
			if (data.category) {
				data.category = data.category.toLowerCase();
				// data.subCategories = data.subCategories.map((c) => c.toLowerCase());
				try {
					await dbConnect();
					const categoryData = new CategoryModel(data);
					await categoryData.save();
					res.send({
						message: "thanks",
						categoryData,
					});
				} catch (err) {
					res.send({
						message: err.message,
					});
				}
			} else {
				res.send({
					message: "category name is missing",
				});
			}
			return;
		}
		default: {
			res.send({
				message: `${method} not allowed in this route...`,
			});
		}
	}
};

export default handler;
