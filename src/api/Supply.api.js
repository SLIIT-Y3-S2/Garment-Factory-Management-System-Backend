const router = require("express").Router();
const supplyController = require("../controller/Supply.controller");

module.exports = function () {
  router.post("/add", supplyController.addSupply);
  router.get("/", supplyController.getallSupplies);
  router.get("/get/:id", supplyController.getoneSupply);
  

  return router;
};