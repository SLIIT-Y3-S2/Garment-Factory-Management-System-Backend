const StockIn = require("../model/stockIn.model");

const addStockIn = async (req, res) => {
  if (req.body) {
    const stockIn = new StockIn(req.body);
    await stockIn
      .save()
      .then((data) => res.status(200).send({ data: data }))
      .catch((err) => res.status(200).send(err));
  }
};

const getStockIn = async (req, res) => {
  if (req.params.id) {
    console.log(req.params.id);
    await StockIn.findById(req.params.id)
      .then((data) => {
        res.status(200).send({ data });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};


const getAllStockIn = async (req, res) => {
await StockIn.find()
.then((data) => {
  res.status(200).send(data);
})
.catch((error) => {
  res.send(error);
});
};

const updateStockIn = async (req, res) => {
console.log(req.body);
if (req.body) {
let id = req.params.id;
await StockIn.findByIdAndUpdate(id, req.body)
  .then((data) => {
    res.status(200).send(data);
  })
  .catch((err) => {
    res.send(err);
  });
}
};

const deleteStockIn = async (req, res) => {
await StockIn.findByIdAndDelete(req.params.id)
.then(() => {
  res.status(200).send({ status: "Deleted" });
})
.catch((err) => {
  res.status(500).send(err);
});
};

module.exports = {
addStockIn,
getStockIn,
getAllStockIn,
updateStockIn,
deleteStockIn,
};