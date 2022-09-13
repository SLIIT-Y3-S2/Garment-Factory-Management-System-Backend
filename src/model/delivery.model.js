const mongoose = require("mongoose");

const DeliverySchema = new mongoose.Schema({
  orderID: { type: String, required: true },
  buyerID: { type: String, required: true },
  buyerName: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  vehicleNo: { type: String, required: true },
  totalCost: { type: String, required: true },
});

const Delivery = mongoose.model("deliveries", DeliverySchema);
module.exports = Delivery;