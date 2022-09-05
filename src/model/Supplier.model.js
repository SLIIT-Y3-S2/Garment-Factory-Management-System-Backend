const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const supplierSchema = new Schema({

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

const Supplier = mongoose.model("Suppliers", supplierSchema);

module.exports = Supplier;