const express = require('express');
const router = express.Router();
const FormerBuyerController = require('../controller/formerbuyers.controller');

module.exports = function (){
    router.post('/', FormerBuyerController.addFormerBuyer);
    router.get('/', FormerBuyerController.getAllFormerBuyers);
    return router;
}