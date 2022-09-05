const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const supplySchema = new Schema({

  supplierId: {
    type: String,
    required: true,
  },  
  item: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  
 
});

const Supply = mongoose.model("Supply", supplySchema);

module.exports = Supply;