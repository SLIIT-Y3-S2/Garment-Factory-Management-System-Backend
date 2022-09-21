const StockOut = require("../model/stockOut.model");

const addStockOut = async (req, res) => {
  if (req.body) {
    const stockOut = new StockOut(req.body);
    await stockOut
      .save()
      .then((data) => res.status(200).send({ data: data }))
      .catch((err) => res.status(200).send(err));
  }
};

const getStockOut = async (req, res) => {
  if (req.params.id) {
    console.log(req.params.id);
    await StockOut.findById(req.params.id)
      .then((data) => {
        res.status(200).send({ data });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

const getAllStockOut = async (req, res) => {
  await StockOut.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

const updateStockOut = async (req, res) => {
  console.log(req.body);
  if (req.body) {
    let id = req.params.id;
    await StockOut.findByIdAndUpdate(id, req.body)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  }
};

const deleteStockOut = async (req, res) => {
  await StockOut.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).send({ status: "Deleted" });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
    addStockOut,
  getStockOut,
  getAllStockOut,
  updateStockOut,
  deleteStockOut,
};
