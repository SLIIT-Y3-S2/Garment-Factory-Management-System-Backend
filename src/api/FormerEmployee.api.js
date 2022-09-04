const express = require("express");
const router = express.Router();
const FormerEmployeeController = require("../controller/FormerEmployee.controller.js");

module.exports = function () {
    router.post("/addFormerEmployee", FormerEmployeeController.AddFormerEmployee);
    
    return router;
    }