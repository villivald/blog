const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  url: { type: String, required: true },
  picture: String,
  stars: Number,
  year: Number,
  month: Number,
  day: Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

bookSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Book", bookSchema);
