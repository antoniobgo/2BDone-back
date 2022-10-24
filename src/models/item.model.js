const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const itemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    done: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
itemSchema.plugin(toJSON);
itemSchema.plugin(paginate);

/**
 * @typedef Item
 */
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
