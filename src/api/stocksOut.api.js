const express = require("express");
const router = express.Router();
const StockOutController = require("../controller/stockOut.controller");

module.exports = function () {
  router.post("/", StockOutController.addStockOut);
  router.get("/:id", StockOutController.getStockOut);
  router.put("/:id", StockOutController.updateStockOut);
  router.delete("/:id", StockOutController.deleteStockOut);
  router.get("/", StockOutController.getAllStockOut);
  return router;
};
