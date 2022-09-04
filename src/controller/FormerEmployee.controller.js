const FormerEmployee = require("../model/FormerEmployee.model.js");

const AddFormerEmployee = async (req, res) => {
  if (req.body) {
    const formeremployee = new FormerEmployee(req.body);
    await formeremployee
      .save()
      .then((data) => res.status(200).send(data))
      .catch((error) => res.status(500).send({ error: error.message }));
  }
};

const GetAllFormerEmployees = async (req, res) => {
    await FormerEmployee.find({})
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((error) => {
            res.status(500).send({ error: error.message });
        });
};

module.exports = {
    AddFormerEmployee,
    GetAllFormerEmployees
};