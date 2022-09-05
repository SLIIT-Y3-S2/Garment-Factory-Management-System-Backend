const mongoose = require("mongoose");

const DB =
  "mongodb+srv://DRCC:SER001@garment-factory-managem.qg73eoz.mongodb.net/Garment_Factory_Management_System?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(DB);
  console.log("Database Connected");
};

module.exports = connectDB;
