const Supplier = require("../model/Supplier.model");
const express = require("express");
const mongoose = require("mongoose");

//Add New Supplier
const addSupplier = async (req, res) => {
  if (req.body) {
    await Supplier(req.body)
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

//View All Suppliers
const getallSuppliers = async (req, res) => {
  await Supplier.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//View particular supplier
const getoneSupplier = async (req, res) => {
  let supID = req.params.id;
  await Supplier.findById(supID)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//Update Supplier
const updateSupplier = async (req, res) => {
  console.log(req.body);
  if (req.body) {
    let id = req.params.id;
    await Supplier.findByIdAndUpdate(id, req.body)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

//Delete Supplier
const deleteSupplier = async (req, res) => {
  await Supplier.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).send({ status: "Deleted" });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  addSupplier,
  getallSuppliers,
  getoneSupplier,
  updateSupplier,
  deleteSupplier,
};
