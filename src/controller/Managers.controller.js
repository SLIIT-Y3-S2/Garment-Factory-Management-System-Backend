const { Manager, validate } = require("../model/Managers.model.js");
const bcrypt = require("bcrypt");
const joi = require("joi");

const AddManager = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const manager = await Manager.findOne({ Email: req.body.Email });
    if (manager) {
      return res.status(409).send({ message: "Manager already registered" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.Password, salt);

    await new Manager({ ...req.body, Password: hashedPassword }).save();
    res.status(201).send({ message: "Manager added successfully" });

  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
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

const LoginManager = async (req, res) => {
  try {
    const { error } = validatepassword(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const manager = await Manager.findOne({ Email: req.body.Email });
    if (!manager) {
      return res.status(404).send({ message: "User Not Found" });
    }

    const validPassword = await bcrypt.compare(
      req.body.Password,
      manager.Password
    );
    if (!validPassword) {
      return res.status(401).send({ message: "Invalid Email or Password" });
    }
    const token = manager.generateAuthToken();
    res.status(200).send({ data: token, message: "Login Successfull" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const validatepassword = (data) => { 
  const schema = joi.object({
    Email: joi.string().required().email().label("Email"),
    Password: joi.string().required().label("Password"),
  });
  return schema.validate(data);
}


module.exports = {
  AddManager,
  GetManager,
  GetAllManagers,
  UpdateManager,
  DeleteManager,
  LoginManager,
};
