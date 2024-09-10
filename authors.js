const mongoose = require("mongoose");
const Authorsschema= mongoose.Schema({
  id: { type: Number },
  name: { type: String },
  books: [String]
});
const AuthorsModel= mongoose.model("authors", Authorsschema);
module.exports = AuthorsModel;
