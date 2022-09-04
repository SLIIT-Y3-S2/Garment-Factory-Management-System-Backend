const router = require("express").Router();
const supplyController = require("../controller/Supply.controller");

module.exports = function () {
  router.post("/", supplyController.addSupply);
  router.get("/", supplyController.getallSupplies);
  router.get("/:id", supplyController.getoneSupply);
  

  return router;
};