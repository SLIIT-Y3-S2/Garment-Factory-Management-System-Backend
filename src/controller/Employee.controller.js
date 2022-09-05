const Employee = require("../model/Employee.model.js");

const AddEmployee = async (req, res) => {
    if (req.body) {
        const employee = new Employee(req.body);
        await employee
        .save()
        .then((data) => 
            res.status(200).send(data)
        )
        .catch((error) => 
            res.status(500).send({ error: error.message })
        );
    }
};
    
const GetEmployee = async (req, res) => {
    if (req.body) {
        await Employee.findOne({ Email: req.params.Email })
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((error) => {
            res.status(500).send({ error: error.message });
        });
    }
};

const GetAllEmployees = async (req, res) => {
    await Employee.find({})
    .then((data) => {
        res.status(200).send(data);
    })
    .catch((error) => {
        res.status(500).send({ error: error.message });
    });
};

const UpdateEmployee = async (req, res) => {
    if (req.body) {
        let id = req.params.id;
        await Employee.findByIdAndUpdate(id, req.body)
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((error) => {
            res.status(500).send({ error: error.message });
        });
    }
};

const DeleteEmployee = async (req, res) => {
    if (req.body) {
        let id = req.params.id;
        await Employee.findByIdAndDelete(id)
        .then(() => {
            res.status(200).send({ status: "Employee Deleted Successfully" });
        })
        .catch((error) => {
            res.status(500).send({ error: error.message });
        });
    }
};

module.exports = {
    AddEmployee,
    GetEmployee,
    GetAllEmployees,
    UpdateEmployee,
    DeleteEmployee,
};