const express = require("express");
const router = express.Router();
const EmployeeController = require("../controller/Employee.controller.js");

module.exports = function () {
  router.post("/addEmployee", EmployeeController.AddEmployee);
  router.get("/getEmployee/:Email", EmployeeController.GetEmployee);
  router.get("/", EmployeeController.GetAllEmployees);
  router.put("/updateEmployee/:id", EmployeeController.UpdateEmployee);
  router.delete("/deleteEmployee/:id", EmployeeController.DeleteEmployee);

  return router;
};
