const express = require("express");
const router = express.Router();
const ManagerController = require("../controller/Managers.controller.js");

module.exports = function () {
  router.post("/addManager", ManagerController.AddManager);
  router.get("/getManager/:Email", ManagerController.GetManager);
  router.get("/", ManagerController.GetAllManagers);
  router.put("/updateManager/:id", ManagerController.UpdateManager);
  router.delete("/deleteManager/:id", ManagerController.DeleteManager);
  router.post("/login", ManagerController.LoginManager);

  return router;
};
