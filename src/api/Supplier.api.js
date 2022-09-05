const router = require("express").Router();
const supplierController = require("../controller/Supplier.controller");

module.exports = function () {
  router.post("/", supplierController.addSupplier);
  router.get("/", supplierController.getallSuppliers);
  router.get("/:id", supplierController.getoneSupplier);
  router.put("/:id", supplierController.updateSupplier);
  router.delete("/:id", supplierController.deleteSupplier);

  return router;
};
