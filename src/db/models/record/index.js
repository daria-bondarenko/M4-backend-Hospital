const mongoose = require('mongoose');

const {Schema} = mongoose;

const recordScheme = new Schema({
  name: {
    type: String,
    required: true
  },
  doctor: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  complaint: {
    type: String,
    required: true
  }
  ,
  userId: {
    type: String,
    required: true
  }
});

module.exports = Record = mongoose.model('records', recordScheme);