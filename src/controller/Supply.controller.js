const dailySupply = require("../model/Supply.model");
const mongoose = require("mongoose");

//Add New Supply
const addSupply = async (req, res) => {
  if (req.body) {
    const supply = new dailySupply(req.body);
    await supply
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

//View All Supplies
const getallSupplies = async (req, res) => {
  await dailySupply
    .find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//View particular supplier
const getoneSupply = async (req, res) => {
  let supplyID = req.params.id;
  await dailySupply
    .findById(supplyID)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};



module.exports = {
  addSupply,
  getallSupplies,
  getoneSupply,
  
};
