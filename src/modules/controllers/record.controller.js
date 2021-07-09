const Record = require('../../db/models/record/index');
const jwtDecode = require('jwt-decode');

module.exports.getAllRecords = async (req, res) => {
  const result = await Record.find({userId: req.user._id});
  res.send({data: result});
};

module.exports.createNewRecord = (req, res) => {
  const record = new Record({
    name: req.body.name,
    doctor: req.body.doctor,
    date: req.body.date,
    complaint: req.body.complaint,
    userId: req.user._id
  });
  record.save().then(result => {
    Record.find({userId: req.user._id}).then(result => {
      res.send({data: result});
    });
  });
};

module.exports.editRecord = (req, res) => {

};

module.exports.deleteRecord = (req, res) => {

};