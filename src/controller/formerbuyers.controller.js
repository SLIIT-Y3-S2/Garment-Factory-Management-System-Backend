const FormerBuyer = require("../model/formerbuyers.model");


const addFormerBuyer = async (req, res) => {
    if (req.body) {
        const formerbuyer = new FormerBuyer(req.body);
        await formerbuyer.save()
            .then(data => res.status(200).send({data: data}))
            .catch(err => res.status(200).send(err));
    }
}



const getAllFormerBuyers = async (req, res) => {
    await FormerBuyer.find()
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.send(error);
        });
}

module.exports = {
    addFormerBuyer,
    getAllFormerBuyers,
    
    
}