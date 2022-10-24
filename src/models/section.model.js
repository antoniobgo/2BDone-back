const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const Item = require('./item.model');

const sectionSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    items: {
      type: [Item.schema],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
sectionSchema.plugin(toJSON);
sectionSchema.plugin(paginate);

/**
 * @typedef Section
 */
const Section = mongoose.model('Section', sectionSchema);

module.exports = Section;
