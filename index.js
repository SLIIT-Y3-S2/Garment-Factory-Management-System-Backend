const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./src/config/config");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.get("/", (req, res) => {
  res.json("Hello Node!");
});

// const vehicleApi = require("./src/api/vehicle.api");
// app.use("/vehicle", vehicleApi());
const supplierAPI = require("./src/api/Supplier.api");
app.use("/supplier", supplierAPI());

const formersupplierAPI = require("./src/api/FormerSuppliers.api");
app.use("/formersupplier", formersupplierAPI());

const supplyAPI = require("./src/api/Supply.api");
app.use("/supply", supplyAPI());


app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

