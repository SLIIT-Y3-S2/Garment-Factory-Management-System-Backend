const express = require("express");
const router = express.Router();
const TotalStockController = require("../controller/totalStock.controller")

module.exports = function () {
    router.post("/", TotalStockController.addTotalStock);
    router.get("/:id", TotalStockController.getTotalStock);
    router.put("/:id", TotalStockController.updateTotalStock);
    // router.delete("/:id", StockInController.deleteStockIn);
    router.get("/", TotalStockController.getAllTotalStock);
    return router;
  };