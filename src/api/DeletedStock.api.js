const express = require("express");
const router = express.Router();
const DeletedStockController = require("../controller/DeletedStock.controller");

module.exports = function () {
  router.post("/", DeletedStockController.addDeletedStock);
  router.get("/", DeletedStockController.getAllDeletedStock);
  return router;
};
