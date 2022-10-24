const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const Section = require('./section.model');

const boardSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    sections: {
      type: [Section.schema],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
boardSchema.plugin(toJSON);
boardSchema.plugin(paginate);

/**
 * @typedef Board
 */
const Board = mongoose.model('Board', boardSchema);

module.exports = Board;
