const mongoose1 = require("mongoose");
const PublicationsSchema = mongoose1.Schema(
  {
    id : {type :Number},
    name : {type:String},
    books: [String]
  }
);
const PublicationsModel = mongoose1.model("publications", PublicationsSchema);
module.exports = PublicationsModel;
