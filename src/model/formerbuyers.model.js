const mongoose = require("mongoose");

const FormerBuyerSchema = new mongoose.Schema({
  buyerID: { type: String, required: true },
  buyerName: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String, required: true },
  contactNo: { type: String, required: true },
});

const FormerBuyer = mongoose.model("formerbuyer", FormerBuyerSchema);
module.exports = FormerBuyer;
