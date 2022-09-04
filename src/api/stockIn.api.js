const express = require("express");
const router = express.Router();
const StockInController = require("../controller/stockIn.controller");

module.exports = function () {
    router.post("/", StockInController.addStockIn);
    router.get("/:id", StockInController.getStockIn);
    router.put("/:id", StockInController.updateStockIn);
    router.delete("/:id", StockInController.deleteStockIn);
    router.get("/", StockInController.getAllStockIn);
    return router;
  };