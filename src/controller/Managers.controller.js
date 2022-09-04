const Manager = require("../model/Managers.model.js");

const AddManager = async (req, res) => {
  if (req.body) {
    const manager = new Manager(req.body);
    await manager
      .save()
      .then((data) => 
        res.status(200).send(data)
      )
      .catch((error) => 
        res.status(500).send({ error: error.message })
      );
  }
};

const GetManager = async (req, res) => {
  if (req.body) {
    await Manager.findOne({ Email: req.params.Email })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const GetAllManagers = async (req, res) => {
  await Manager.find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(500).send({ error: error.message });
    });
};

const UpdateManager = async (req, res) => {
  if (req.body) {
    let id = req.params.id;
    await Manager.findByIdAndUpdate(id, req.body)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

const DeleteManager = async (req, res) => {
  if (req.body) {
    let id = req.params.id;
    await Manager.findByIdAndDelete(id)
      .then(() => {
        res.status(200).send({ status: "Manager Deleted Successfully" });
      })
      .catch((error) => {
        res.status(500).send({ error: error.message });
      });
  }
};

module.exports = {
    AddManager,
    GetManager,
    GetAllManagers,
    UpdateManager,
    DeleteManager
};
