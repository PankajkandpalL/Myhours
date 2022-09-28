import { Schema, model, models } from "mongoose";

const CategorySchema = new Schema({
	category: { type: String, unique: true },
	subCategories: { type: [String] },
});

const CategoryModel = models.category || model("category", CategorySchema);

export default CategoryModel;
