import mongoose, { model, models, Schema } from "mongoose";

const MovieSchema = new Schema({
  Title: String,
  Year: String,
  Rated: String,
  Released: String,
  Genre: String,
  Director: String,
  Writer: String,
  Actors: String,
  Plot: String,
  Poster: String,
  Images: [String],
  imdbRating: String,
});

const MovieModel = models.movie || model("movie", MovieSchema);

export default MovieModel;