const mongoose = require("mongoose");

const BuyerSchema = new mongoose.Schema({

  buyerID : { type: String, required: true},
  buyerName: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String, required: true },
  contactNo: { type: String, required: true },
  
});

const Buyer = mongoose.model("buyer", BuyerSchema);
module.exports = Buyer;