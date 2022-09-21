const express = require("express");
const router = express.Router();
const DeliveryController = require("../controller/delivery.controller");

module.exports = function () {
  router.post("/", DeliveryController.addDelivery);
  router.get("/", DeliveryController.getAllDeliveries);
  return router;
};