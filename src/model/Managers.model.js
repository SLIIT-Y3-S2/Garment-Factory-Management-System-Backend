const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const ManagerSchema = new mongoose.Schema({
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
  Password: {
    type: String,
    required: true,
  },
});


ManagerSchema.methods.generateAuthToken = function () { 
  const token = jwt.sign(
    { _id: this._id },
    "pkvwhtG4shARypPJ7Ix39f9wobIO8nB5",
    { expiresIn: "1h" }
  );
  return token;
}

const Manager = mongoose.model("manager", ManagerSchema);

const validate = (data) => {
  const shema = joi.object({
    Name: joi.string().required().label("Name"),
    Email: joi.string().required().email().label("Email"),
    Mobile: joi.string().required().label("Mobile"),
    NIC: joi.string().required().label("NIC"),
    Address: joi.string().required().label("Address"),
    Position: joi.string().required().label("Position"),
    Password: passwordComplexity().required().label("Password"),
  });
  return shema.validate(data);
}

module.exports = {Manager,validate};
