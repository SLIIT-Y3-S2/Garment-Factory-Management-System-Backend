const express = require("express");
const router = express.Router();
const BuyerController = require("../controller/buyers.controller");

module.exports = function () {
  router.post("/", BuyerController.registerBuyer);
  router.put("/:id", BuyerController.updateBuyer);
  router.delete("/:id", BuyerController.deleteBuyer);
  router.get("/", BuyerController.getAllBuyers);
  return router;
};
