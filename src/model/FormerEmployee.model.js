const mongoose = require("mongoose");

const FormerEmployeeSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Mobile: {
    type: String,
    required: true,
  },
  NIC: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Position: {
    type: String,
    required: true,
  },
});

const FormerEmployee = mongoose.model("formeremployee", FormerEmployeeSchema);
module.exports = FormerEmployee;
