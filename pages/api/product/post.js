import CategoryModel from "../../../models/category";
import ImagesByColorModel from "../../../models/imagesByColor";
import OfferModel from "../../../models/offers";
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
		imagesByColor,
		generalImages,
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
	// res.send(req.body);
	if (
		productName &&
		category &&
		newPrice &&
		generalImages &&
		poster &&
		description
	) {
		let productData = {
			productName,
			category,
			oldPrice,
			newPrice,
			hasColor,
			colors,
			imagesByColor,
			generalImages,
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
		category = category.toLowerCase();
		let categoryData = await CategoryModel.findOne({ category });
		productData.category = categoryData._id;
		let offersData = await OfferModel.find({
			offerCode: { $in: availableOffers },
		});
		productData.availableOffers = offersData;
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
