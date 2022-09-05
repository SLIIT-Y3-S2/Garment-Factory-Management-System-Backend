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

const buyerApi = require("./src/api/buyers.api");
app.use("/buyer", buyerApi());

const formerbuyerApi = require("./src/api/formerbuyers.api");
app.use("/formerbuyer", formerbuyerApi());

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

