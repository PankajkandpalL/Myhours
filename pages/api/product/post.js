import ProductModel from "../../../models/product";

const handler = async (req, res) => {
	if (req.method !== "POST") {
		return res.status(403).send({
			message: `${req.method} is not supported on this route`,
		});
	}
	let {
		productName,
		category,
		oldPrice,
		newPrice,
		hasColor,
		colors,
		imagesByColors,
		poster,
		description,
		ingredients,
		howToUse,
		commonlyAskedQuestions,
		reviews,
		availableOffers,
		isTrending,
		sellCount,
	} = req.body;
	if (
		productName &&
		category &&
		newPrice &&
		poster &&
		description &&
		ingredients &&
		howToUse &&
		commonlyAskedQuestions
	) {
		let productData = {
			productName,
			category,
			oldPrice,
			newPrice,
			hasColor,
			colors,
			imagesByColors,
			poster,
			description,
			ingredients,
			howToUse,
			commonlyAskedQuestions,
			reviews,
			availableOffers,
			isTrending,
			sellCount,
		};
		let product = ProductModel(productData);
		await product.save();
		return res.status(201).send(product);
	} else {
		return res.status(404).send({
			message: "Body is missing some data",
		});
	}
};

export default handler;
