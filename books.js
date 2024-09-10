const mongoose = require("mongoose");
const BookSchema = mongoose.Schema({
  ISBN:{type : String},
  title:{type:String},
  pubdate :{type:String},
  language:{type:String},
  pages:{type:Number},
  authors:[Number],
  publications:[Number],
  cat:[String]

})
const BooksModel=mongoose.model("books",BookSchema);
module.exports = BooksModel;