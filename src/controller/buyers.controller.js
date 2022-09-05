const Buyer = require("../model/buyers.model");

const registerBuyer = async (req, res) => {
  if (req.body) {
    const buyer = new Buyer(req.body);
    await buyer
      .save()
      .then((data) => res.status(200).send({ data: data }))
      .catch((err) => res.status(200).send(err));
  }
};

const getAllBuyers = async (req, res) => {
  await Buyer.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

const updateBuyer = async (req, res) => {
  console.log(req.body);
  if (req.body) {
    let id = req.params.id;
    await Buyer.findByIdAndUpdate(id, req.body)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  }
};

const deleteBuyer = async (req, res) => {
  await Buyer.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).send({ status: "Deleted" });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  registerBuyer,
  getAllBuyers,
  updateBuyer,
  deleteBuyer,
};
