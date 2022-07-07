const mongoose = require("mongoose");
const itemMasterSchema = new mongoose.Schema(
  {
    code: { type: Number, required: true , unique: true},
    name: { type: String, required: true },
    price: { type: Number, required: true }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("item", itemMasterSchema);
