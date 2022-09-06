const TotalStock = require("../model/totalStock.model");
const quantity = require("../model/stockIn.model");

const addTotalStock = async (req, res) => {
  if (req.body) {
    const totalstock = new TotalStock(req.body);
    await totalstock
      .save()
      .then((data) => res.status(200).send({ data: data }))
      .catch((err) => res.status(200).send(err));
  }
};

const getTotalStock = async (req, res) => {
  if (req.params.id) {
    console.log(req.params.id);
    await TotalStock.findById(req.params.id)
      .then((data) => {
        res.status(200).send( data );
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

const getAllTotalStock = async (req, res) => {
  await TotalStock.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.send(error);
    });
};

const updateTotalStock = async (req, res) => {
  console.log(req.body);
  if (req.body) {
    let id = req.params.id;
    console.log(id);
    await TotalStock.findByIdAndUpdate(id, req.body)
      .then((data) => {
        res.status(200).send(data);
        console.log("yyyyyyyyyyyyyyyyyy")
      })
      .catch((err) => {
        res.send(err);
        console.log("hhhhhhhhhhhhhhhhh")
      });
  }
};

//   const deleteTotalStock = async (req, res) => {
//   await TotalStock.findByIdAndDelete(req.params.id)
//   .then(() => {
//     res.status(200).send({ status: "Deleted" });
//   })
//   .catch((err) => {
//     res.status(500).send(err);
//   });
//   };

module.exports = {
  addTotalStock,
  getTotalStock,
  getAllTotalStock,
  updateTotalStock,
  //   deleteTotalStock,
};
