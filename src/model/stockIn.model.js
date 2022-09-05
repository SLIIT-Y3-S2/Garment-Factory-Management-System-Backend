const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const StockInSchema = new Schema({
  GarmentType: { type: String, required: true },
  UnitPrice: { type: String, required: true },
  Quantity: { type: String, required: true },
  ReceivedFrom: { type: String, required: true },
  StoredSection: { type: String, required: true },
  StoredBin: { type: String, required: true },
  Date: { type: String, required: true },
  Time: { type: String, required: true },
});

const StockIn = mongoose.model("stockIn", StockInSchema);
module.exports = StockIn;
