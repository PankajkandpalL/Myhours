import mongoose from "mongoose";
import dbConnect from "../../lib/mongodbConnect";
import MovieModel from "../../models/Movie";

export default async function handler(req, res) {
	const { method } = req;
	const { id } = req.query;
	const movieModel = mongoose.models.movie || MovieModel;
	await dbConnect();
	// res.send(method);
	switch (method) {
		case "GET": {
			// console.log(id);
			let movie = await movieModel.findById(id);
			return res.send(movie);
			// console.log(movie);
		}
		case "PATCH": {
			// console.log(id);
			const { userRating } = req.query;
			console.log(userRating);
			let movie = await movieModel.findById(id);
			return res.send(movie);
			// console.log(movie);
		}
	}
}


