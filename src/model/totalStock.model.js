const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const TotalStockSchema = new Schema({
  GarmentType: { type: String},
  Quantity: { type: Number, required: true },
});

const TotalStock = mongoose.model("totalstock", TotalStockSchema);
module.exports = TotalStock;
