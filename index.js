const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
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

const buyerApi = require("./src/api/buyers.api");
app.use("/buyer", buyerApi());

const formerbuyerApi = require("./src/api/formerbuyers.api");
app.use("/formerbuyer", formerbuyerApi());

const deliveryApi = require("./src/api/delivery.api");
app.use("/delivery", deliveryApi());

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

const EmployeeAPI = require("./src/api/Employee.api");
app.use("/employee", EmployeeAPI());

const FormerEmployeeAPI = require("./src/api/FormerEmployee.api");
app.use("/formeremployee", FormerEmployeeAPI());

const StockInAPI = require("./src/api/stockIn.api");
app.use("/stockin", StockInAPI());

const StockOutAPI = require("./src/api/stocksOut.api");
app.use("/stockout", StockOutAPI());

const DeletedStockAPI = require("./src/api/DeletedStock.api");
app.use("/deletedstock", DeletedStockAPI());

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
