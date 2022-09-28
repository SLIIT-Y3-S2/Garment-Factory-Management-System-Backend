const Delivery = require("../model/delivery.model");

const addDelivery = async (req, res) => {
  if (req.body) {
    const delivery = new Delivery(req.body);
    await delivery
      .save()
      .then((data) => res.status(200).send({ data: data }))
      .catch((err) => res.status(200).send(err));
  }
};

const getAllDeliveries = async (req, res) => {
  await Delivery.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

module.exports = {
    addDelivery,
    getAllDeliveries,
    
  };