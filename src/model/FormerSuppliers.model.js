const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const formersupplierSchema = new Schema({
  supplierId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
});

const FormerSupplier = mongoose.model("FormerSupplier", formersupplierSchema);

module.exports = FormerSupplier;
