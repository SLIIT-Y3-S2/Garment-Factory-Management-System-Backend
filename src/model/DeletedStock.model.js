const mongoose = require("mongoose");

const DeletedStockSchema = new mongoose.Schema({
    GarmentType: { type: String, required: true },
    UnitPrice: { type: String, required: true },
    Quantity: { type: Number, required: true },
    ReceivedFrom: { type: String, required: true },
    StoredSection: { type: String, required: true },
    StoredBin: { type: String, required: true },
    Date: { type: String, required: true },
    Time: { type: String, required: true },
});

const DeletedStock = mongoose.model("deletedstock", DeletedStockSchema);
module.exports = DeletedStock;
