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

const stockInAPI = require("./src/api/stockIn.api");
app.use("/stockin", stockInAPI());
const supplierAPI = require("./src/api/Supplier.api");
app.use("/supplier", supplierAPI());

const formersupplierAPI = require("./src/api/FormerSuppliers.api");
app.use("/formersupplier", formersupplierAPI());

const supplyAPI = require("./src/api/Supply.api");
app.use("/supply", supplyAPI());
const totalStockAPI = require("./src/api/totalStock.api");
app.use("/totalstock", totalStockAPI());
const ManagerAPI = require("./src/api/Managers.api");
app.use("/manager", ManagerAPI());

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

