const mongoose = require("mongoose");
const reqSchema = new mongoose.Schema({
    senderId: String, 
    itemId: String, 
    ownerId: String,
    start: Date,
    end: Date,
    period: Number,
    accepnt: Boolean,
}, {
    timestamps: true,
}
);

const reqModel = mongoose.model("ReqModel", reqSchema);
module.exports = reqModel;