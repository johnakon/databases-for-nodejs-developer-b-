const mongoose = require('mongoose');

// schema definition
const ItemSchema = mongoose.Schema(
  {
    sku: { type: Number, required: true, index: { unique: true } },
    name: { type: String, required: true, index: true },
    price: { type: Number, required: true, unique: false },
  },
  { timestamps: true }
);

// export the module
module.exports = mongoose.model('Item', ItemSchema);
