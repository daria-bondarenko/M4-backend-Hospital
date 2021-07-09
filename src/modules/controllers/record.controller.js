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
  const {_id} = req.body;

  if ((req.body.hasOwnProperty('_id')
    && (req.body.hasOwnProperty('name')
      || req.body.hasOwnProperty('doctor')
      || req.body.hasOwnProperty('date')
      || req.body.hasOwnProperty('complaint')))) {
    for (let key in req.body) {
      if ((key === 'name'
        || key === 'doctor'
        || key === 'date'
        || key === 'complaint')
        && (req.body[key])) {
        Record.updateOne({_id}, {[key]: req.body[key]}
        ).then(result => {
          Record.find({userId: req.user._id}).then(result => {
            res.send({data: result})
          })
        })
      }
    }
  } else {
    Record.find({userId: req.user._id}).then(result => {
      res.send({data: result})
    })
  }
};

module.exports.deleteRecord = (req, res) => {
  Record.deleteOne({_id: req.query._id}).then(result => {
    Record.find({userId: req.user._id}).then(result => {
      res.send({data: result});
    })
  })
};