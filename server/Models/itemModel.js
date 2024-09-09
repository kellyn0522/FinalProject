const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
    ownerName: { type: String, required: true, minlength: 3, maxlength: 30 },
    itemLocate:{ type: String, required: true, minlength: 3, maxlength: 30 },
    zipCode:{ type: String, required: true, minlength: 3, maxlength: 30 },
    houseAddress:{ type: String, required: true, minlength: 3, maxlength: 30 },
    location :{ type: String, required: true, minlength: 3, maxlength: 30 },
    itemId : { type: String, required: true, minlength: 3, maxlength: 30 },
    ownerId : { type: String, required: true, minlength: 3, maxlength: 30 },
    housePrice: { type: String, required: true, minlength: 3, maxlength: 30 },
    memo : { type: String, required: true, minlength: 3, maxlength: 500 },
    type : { type: String, required: true, minlength: 3, maxlength: 30 },
    isContract: {type : String,required: true, minlength: 3, maxlength: 30 },
    bedSize: {type : String,required: true, minlength: 3, maxlength: 10 },
    hasItems: {type : String,required: true, minlength: 3, maxlength: 30 },
    hasAgent: {type : String,required: true, minlength: 3, maxlength: 30 },
 
    
}, {
    timestamps: true,
}
);

const itemModel = mongoose.model("Item", itemSchema);
module.exports = itemModel;