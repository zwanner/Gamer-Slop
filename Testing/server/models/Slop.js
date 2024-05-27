const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const slopSchema = new Schema({
  slopText: {
    type: String,
    required: 'You need to leave a slop!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  slopAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Slop = model('Slop', slopSchema);

module.exports = Slop;
