const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const StockOutSchema = new Schema({
  BuyerId: { type: String, required: true },
  BuyerName: { type: String, required: true },
  OrderId: { type: String, required: true },
  GarmentType: { type: String, required: true },
  UnitPrice: { type: Number, required: true },
  Quantity: { type: Number, required: true },
  TotalCost: { type: Number, required: true },
  Date: { type: String, required: true },
  Time: { type: String, required: true },
});

const StockOut = mongoose.model("stockOut", StockOutSchema);
module.exports = StockOut;