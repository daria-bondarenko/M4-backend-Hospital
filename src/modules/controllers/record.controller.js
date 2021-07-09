const Record = require('../../db/models/record/index');
const jwtDecode = require('jwt-decode');

module.exports.getAllRecords = async (req, res) => {
  const result = await Record.find({userId: req.user._id});
  res.send({data: result});
};

module.exports.createNewRecord = (req, res) => {

};

module.exports.editRecord = (req, res) => {

};

module.exports.deleteRecord = (req, res) => {

};