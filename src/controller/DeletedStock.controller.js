const DeletedStock = require("../model/DeletedStock.model");

const addDeletedStock = async (req, res) => {
  if (req.body) {
    const deletedStock = new DeletedStock(req.body);
    await deletedStock
      .save()
      .then((data) => res.status(200).send({ data: data }))
      .catch((err) => res.status(200).send(err));
  }
};

const getAllDeletedStock = async (req, res) => {
  await DeletedStock.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

module.exports = {
  addDeletedStock,
  getAllDeletedStock,
};
