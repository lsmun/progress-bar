'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
  name: {
    type: String,
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },

  // valueCurrent / valueMax = current progress
  valueMax: {
    type: Number,
  },
  valueCurrent: {
    type: Number,
  },

  // total number of LEDs
  matrixWidth: {
    type: Number,
  },
  matrixHeight: {
    type: Number,
  }
});

module.exports = mongoose.model('Event', EventSchema);