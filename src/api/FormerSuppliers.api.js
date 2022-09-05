const router = require("express").Router();
const formerSupplierController = require("../controller/FormerSuppliers.controller");

module.exports = function () {
  router.post("/", formerSupplierController.addFormerSupplier);
  router.get("/", formerSupplierController.getallFormerSuppliers);

  return router;
};
