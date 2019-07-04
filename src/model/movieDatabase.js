//Create a schema
const movieSchema = new Schema({
  title: { type: String, required: true, unique: true },
  director: String,
  year: Number,
  rate: Number,
  id: { type: Number, required: true, unique: true },
  like: Boolean,
  created_at: Date,
  updated_at: Date
});

const Movies = mongoose.model("Movies", movieSchema);

module.exports = Movies;
